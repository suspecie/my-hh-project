import { HeaderModule } from './../../core/components/header/header.module';
import { FooterModule } from './../../core/components/footer/footer.module';
import { BoxProductModule } from './../../shared/components/box-product/box-product.module';
import { CardProductModule } from './../../shared/components/card-product/card-product.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsComponent } from './all-products.component';

describe('AllProductsComponent', () => {
  let component: AllProductsComponent;
  let fixture: ComponentFixture<AllProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllProductsComponent],
      imports: [
        CardProductModule,
        BoxProductModule,
        FooterModule,
        HeaderModule,
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
