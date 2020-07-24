import { FormBuilder, FormGroup } from '@angular/forms';
import { GeocodeService } from './../../../core/services/geocode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  addressForm: FormGroup;

  constructor(
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
        (addressInfo) => {
          console.log('addressInfo', addressInfo);
        },
      );
  }
}
