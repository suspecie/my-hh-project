import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [RouterModule],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
