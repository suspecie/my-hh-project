import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const data = history && history.state && history.state.data ? history.state.data : '';
  }

}
