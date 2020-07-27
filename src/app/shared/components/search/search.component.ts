import { IAddressInfo } from './../../interfaces/address-info.interface';
import { PocSearchService } from './../../../core/services/poc-search.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeocodeService } from './../../../core/services/geocode.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  public addressForm: FormGroup;

  public pocs: [];

  public isLoading = false;

  public isError = false;

  public isCleared = false;

  constructor(
    private pocSearchService: PocSearchService,
    private geocodeService: GeocodeService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.addressForm = this.fb.group({
      address: [''],
    });
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.isError = false;
    this.getLatLogByAddress(this.addressForm.value.address);
  }

  public goToProducts(id: string): void {
    this.router.navigate(['/produtos'], { state: { data: { pocId: id } } });
  }

  public clear(): void {
    this.isLoading = false;
    this.isError = false;
    this.isCleared = true;
    this.addressForm = this.fb.group({
      address: [''],
    });
  }

  private getLatLogByAddress(address: string): void {
    this.geocodeService.getLatLogByAddress(address)
      .subscribe(
        (addressInfo: IAddressInfo) => {
          if (addressInfo && addressInfo.results[0]
              && addressInfo.results[0].geometry && addressInfo.results[0].geometry.location
          ) {
            this.getPocSearch(
              addressInfo.results[0].geometry.location.lat,
              addressInfo.results[0].geometry.location.lng,
            );
          } else {
            this.isLoading = false;
            this.isError = true;
          }
        },
        (error) => {
          this.isError = true;
          this.isLoading = false;
        },
      );
  }

  private getPocSearch(lat: string, long: string): void {
    this.pocSearchService.getPoc(lat, long)
      .subscribe((resp) => {
        this.pocs = resp.data.pocSearch;

        this.isLoading = false;
        this.isCleared = false;

        if (resp.data.pocSearch && resp.data.pocSearch.length === 0) {
          this.isError = true;
        }
      },
      (error) => {
        this.isError = true;
        this.isLoading = false;
      });
  }
}
