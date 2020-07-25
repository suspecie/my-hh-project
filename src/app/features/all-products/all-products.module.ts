import { BreadcrumbModule } from './../../shared/components/breadcrumb/breadcrumb.module';
import { BoxProductModule } from './../../shared/components/box-product/box-product.module';
import { CardProductModule } from './../../shared/components/card-product/card-product.module';
import { HeaderModule } from './../../core/components/header/header.module';
import { FooterModule } from './../../core/components/footer/footer.module';
import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    AllProductsRoutingModule,
    CardProductModule,
    BoxProductModule,
    BreadcrumbModule,
    FooterModule,
    HeaderModule,
    CommonModule,
  ],
})
export class AllProductsModule { }
