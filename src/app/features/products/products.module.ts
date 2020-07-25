import { BreadcrumbModule } from './../../shared/components/breadcrumb/breadcrumb.module';
import { CardProductModule } from './../../shared/components/card-product/card-product.module';
import { BoxProductModule } from './../../shared/components/box-product/box-product.module';
import { AllCategoryService } from './../../core/services/all-category.service';
import { HeaderModule } from './../../core/components/header/header.module';
import { FooterModule } from './../../core/components/footer/footer.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    ProductsRoutingModule,
    CardProductModule,
    BoxProductModule,
    BreadcrumbModule,
    FooterModule,
    HeaderModule,
    CommonModule,
  ],
  providers: [
    AllCategoryService,
  ],
})
export class ProductsModule { }
