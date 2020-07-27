import { ICategoriesData } from './../../shared/interfaces/categories.interface';
import { AllCategoryService } from './../../core/services/all-category.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  public categories = [];

  public idPoc: string;

  constructor(
    private allCategoryService: AllCategoryService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.idPoc = history && history.state && history.state.data ? history.state.data.pocId : '';
    this.getAllCategoriesProducts();
  }

  public goToHome(): void {
    this.router.navigate(['/']);
  }

  public goToAllProducts(): void {
    this.router.navigate(['/produtos/todos'], { state: { data: { pocId: this.idPoc } } });
  }

  private getAllCategoriesProducts(): void {
    this.allCategoryService.getAllCategories()
      .subscribe((resp: ICategoriesData) => {
        this.categories = resp.data.allCategory;
      });
  }

}
