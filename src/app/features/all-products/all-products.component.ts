import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {

  public idPoc: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.idPoc = history && history.state && history.state.data ? history.state.data.pocId : '';
  }

  public goToHome(): void {
    this.router.navigate(['/']);
  }

}
