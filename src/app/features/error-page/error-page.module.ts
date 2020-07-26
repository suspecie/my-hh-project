import { HeaderModule } from './../../core/components/header/header.module';
import { FooterModule } from './../../core/components/footer/footer.module';
import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPageComponent } from './error-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ErrorPageComponent,
  ],
  imports: [
    ErrorPageRoutingModule,
    FooterModule,
    HeaderModule,
  ],
})
export class ErrorPageModule { }
