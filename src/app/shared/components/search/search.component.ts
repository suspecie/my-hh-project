import { IAddressInfo } from './../../interfaces/address-info.interface';
import { PocSearchService } from './../../../core/services/poc-search.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeocodeService } from './../../../core/services/geocode.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  public addressForm: FormGroup;
  public pocs: [];

  constructor(
    private pocSearchService: PocSearchService,
    private geocodeService: GeocodeService,
    private fb: FormBuilder,
  ) {
    this.addressForm = this.fb.group({
      address: [''],
    });
  }

  public onSubmit(): void {
    this.getLatLogByAddress(this.addressForm.value.address);
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
          }
        },
      );
  }

  private getPocSearch(lat: string, long: string): void {
    this.pocSearchService.getPoc(lat, long)
      .subscribe((resp) => {
        console.log('resp', resp.data.pocSearch);
        this.pocs = resp.data.pocSearch;
        console.log('this.pocs', this.pocs);
      });
  }
}
