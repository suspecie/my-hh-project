import { AllCategoryService } from './../../core/services/all-category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  public categories = [];

  constructor(
    private allCategoryService: AllCategoryService,
  ) {}

  ngOnInit(): void {
    const data = history && history.state && history.state.data ? history.state.data : '';
    this.getAllCategoriesProducts();
  }

  private getAllCategoriesProducts(): void {
    this.allCategoryService.getAllCategories()
      .subscribe((resp) => {
        this.categories = resp.data.allCategory;
      });
  }
}
