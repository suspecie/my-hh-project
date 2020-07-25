import { Apollo } from 'apollo-angular';
import { ProductsService } from './../../../core/services/products.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductComponent } from './card-product.component';

describe('CardProductComponent', () => {
  let component: CardProductComponent;
  let fixture: ComponentFixture<CardProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardProductComponent],
      providers: [
        ProductsService,
        Apollo,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
