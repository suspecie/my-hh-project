import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent {

  constructor(private router: Router) { }

  public goToHome(): void {
    this.router.navigate(['/']);
  }

}
