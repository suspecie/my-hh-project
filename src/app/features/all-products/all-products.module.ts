import { BoxProductModule } from './../../shared/components/box-product/box-product.module';
import { CardProductModule } from './../../shared/components/card-product/card-product.module';
import { HeaderModule } from './../../core/components/header/header.module';
import { FooterModule } from './../../core/components/footer/footer.module';
import { AllProductsRoutingModule } from './all-products-routing.module';
import { NgModule } from '@angular/core';
import { AllProductsComponent } from './all-products.component';

@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    AllProductsRoutingModule,
    CardProductModule,
    BoxProductModule,
    FooterModule,
    HeaderModule,
  ],
})
export class AllProductsModule { }
