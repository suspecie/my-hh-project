import { ProductsService } from './../../../core/services/products.service';
import { CardProductComponent } from './card-product.component';
import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import pt from '@angular/common/locales/pt';

registerLocaleData(pt, 'pt-BR');

@NgModule({
  declarations: [CardProductComponent],
  imports: [
    CommonModule,
  ],
  exports: [CardProductComponent],
  providers: [
    ProductsService,
    CurrencyPipe,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class CardProductModule { }
