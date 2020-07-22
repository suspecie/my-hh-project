import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    ProductsRoutingModule,
  ],
})
export class ProductsModule { }
