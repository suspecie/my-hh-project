import { CardProductModule } from './../../shared/components/card-product/card-product.module';
import { BoxProductModule } from './../../shared/components/box-product/box-product.module';
import { BreadcrumbModule } from './../../shared/components/breadcrumb/breadcrumb.module';
import { HeaderModule } from './../../core/components/header/header.module';
import { FooterModule } from './../../core/components/footer/footer.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Apollo } from 'apollo-angular';

import { AllProductsComponent } from './all-products.component';

describe('AllProductsComponent', () => {
  let component: AllProductsComponent;
  let fixture: ComponentFixture<AllProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllProductsComponent],
      imports: [
        RouterTestingModule,
        CardProductModule,
        BoxProductModule,
        BreadcrumbModule,
        FooterModule,
        HeaderModule,
      ],
      providers: [
        Apollo,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
