import { CardProductModule } from './../../shared/components/card-product/card-product.module';
import { BoxProductModule } from './../../shared/components/box-product/box-product.module';
import { HeaderModule } from './../../core/components/header/header.module';
import { FooterModule } from './../../core/components/footer/footer.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
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
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
