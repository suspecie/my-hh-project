import { AllProductsModule } from './features/all-products/all-products.module';
import { ProductsModule } from './features/products/products.module';
import { HomeModule } from './features/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
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
    ProductsModule,
    BrowserModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
