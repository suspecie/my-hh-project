import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {

  @Input()
  public idPoc: string;

  @Input()
  public isAllProductsRoute: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.idPoc = history && history.state && history.state.data ? history.state.data.pocId : '';
  }

  public goToProducts(): void {
    this.router.navigate(['/produtos'], { state: { data: { pocId: this.idPoc } } });
  }

}
