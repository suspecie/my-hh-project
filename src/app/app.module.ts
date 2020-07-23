import { ErrorPageModule } from './features/error-page/error-page.module';
import { AllProductsModule } from './features/all-products/all-products.module';
import { ProductsModule } from './features/products/products.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './features/home/home.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AllProductsModule,
    AppRoutingModule,
    ErrorPageModule,
    ProductsModule,
    BrowserModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
