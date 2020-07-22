import { SearchModule } from './../../shared/components/search/search.module';
import { HeaderModule } from './../../core/components/header/header.module';
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
    HeaderModule,
    SearchModule,
  ],
})
export class HomeModule { }
