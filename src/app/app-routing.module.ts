import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './features/home/home.module#HomeModule',
  },
  {
    path: 'produtos',
    loadChildren: './features/products/products.module#ProductsModule',
  },
  {
    path: 'produtos/todos',
    loadChildren: './features/all-products/all-products.module#AllProductsModule',
  },
  {
    path: '**',
    loadChildren: './features/error-page/error-page.module#ErrorPageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
