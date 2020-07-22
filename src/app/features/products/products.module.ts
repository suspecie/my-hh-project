import { HeaderModule } from './../../core/components/header/header.module';
import { FooterModule } from './../../core/components/footer/footer.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    ProductsRoutingModule,
    FooterModule,
    HeaderModule,
  ],
})
export class ProductsModule { }
