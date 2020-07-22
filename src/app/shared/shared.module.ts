import { BoxProductModule } from './components/box-product/box-product.module';
import { SearchModule } from './components/search/search.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SearchModule,
    BoxProductModule,
  ],
})
export class SharedModule { }
