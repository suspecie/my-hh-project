import { PocSearchService } from './../../../core/services/poc-search.service';
import { GeocodeService } from './../../../core/services/geocode.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [SearchComponent],
  providers: [
    PocSearchService,
    GeocodeService,
  ],
})
export class SearchModule { }
