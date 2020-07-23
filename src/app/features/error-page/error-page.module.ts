import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPageComponent } from './error-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ErrorPageComponent,
  ],
  imports: [
    ErrorPageRoutingModule,
  ],
})
export class ErrorPageModule { }
