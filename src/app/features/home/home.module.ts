import { FooterModule } from './../../core/components/footer/footer.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    FooterModule,
  ],
})
export class HomeModule { }
