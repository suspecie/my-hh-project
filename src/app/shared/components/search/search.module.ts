import { GeocodeService } from './../../../core/services/geocode.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [SearchComponent],
  providers: [
    GeocodeService,
  ],
})
export class SearchModule { }
