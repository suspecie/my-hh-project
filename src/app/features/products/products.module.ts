import { BoxProductModule } from './../../shared/components/box-product/box-product.module';
import { HeaderModule } from './../../core/components/header/header.module';
import { FooterModule } from './../../core/components/footer/footer.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    ProductsRoutingModule,
    BoxProductModule,
    FooterModule,
    HeaderModule,
  ],
})
export class ProductsModule { }
