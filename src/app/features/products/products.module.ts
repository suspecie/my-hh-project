import { AllCategoryService } from './../../core/services/all-category.service';
import { CardProductModule } from './../../shared/components/card-product/card-product.module';
import { BoxProductModule } from './../../shared/components/box-product/box-product.module';
import { HeaderModule } from './../../core/components/header/header.module';
import { FooterModule } from './../../core/components/footer/footer.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    ProductsRoutingModule,
    CardProductModule,
    BoxProductModule,
    FooterModule,
    HeaderModule,
    CommonModule,
  ],
  providers: [
    AllCategoryService,
  ],
})
export class ProductsModule { }
