import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
