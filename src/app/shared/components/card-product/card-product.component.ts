import { ProductsService } from './../../../core/services/products.service';
import { Component, OnInit, Input } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {

  @Input()
  public idCategory: number;

  @Input()
  public idPoc: string;

  public products = [];

  public unit = [];

  public price = [];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public decreasesPrice(defaultPrice: number, index: number): void {
    if (this.unit[index] > 1) {
      this.unit[index] -= 1;
      this.price[index] = defaultPrice * this.unit[index];
    }
  }

  public increasesPrice(defaultPrice: number, index: number): void {
    this.unit[index] += 1;
    this.price[index] = defaultPrice * this.unit[index];
  }

  private getProducts(): void {
    if (this.idCategory) {
      this.getProductsByCategory(this.idCategory);
    } else {
      this.getAllProducts();
    }
  }

  private getProductsByCategory(idCategory: number): void {
    this.productsService.getProductsByCategory(this.idPoc, idCategory)
    .pipe(
      map((resp) => {
        return resp.data.poc.products
          .filter((products, i) => i <= 4);
      }),
    )
    .subscribe((limitedProduct) => {
      this.products = limitedProduct;
      this.products
        .map((prod, i) => {
          this.unit[i] = 1;
        });
    });
  }

  private getAllProducts(): void {
    this.productsService.getAllProducts(this.idPoc)
      .subscribe((resp) => {
        this.products = resp.data.poc.products;
        this.products
          .map((prod, i) => {
            this.unit[i] = 1;
          });
      });
  }

}
