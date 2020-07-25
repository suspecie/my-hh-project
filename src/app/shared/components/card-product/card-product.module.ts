import { ProductsService } from './../../../core/services/products.service';
import { CardProductComponent } from './card-product.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CardProductComponent],
  imports: [
    CommonModule,
  ],
  exports: [CardProductComponent],
  providers: [
    ProductsService,
  ],
})
export class CardProductModule { }
