import { AllProductsRoutingModule } from './all-products-routing.module';
import { NgModule } from '@angular/core';
import { AllProductsComponent } from './all-products.component';

@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    AllProductsRoutingModule,
  ],
})
export class AllProductsModule { }
