import { CardProductModule } from './components/card-product/card-product.module';
import { BoxProductModule } from './components/box-product/box-product.module';
import { SearchModule } from './components/search/search.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CardProductModule,
    BoxProductModule,
    SearchModule,
  ],
})
export class SharedModule { }
