import { ProductsService } from './../../../core/services/products.service';
import { Component, OnInit, Input } from '@angular/core';

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

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
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
    .subscribe((resp) => {
      this.products = resp.data.poc.products;
    });
  }

  private getAllProducts(): void {
    this.productsService.getAllProducts(this.idPoc)
      .subscribe((resp) => {
        this.products = resp.data.poc.products;
      });
  }

}
