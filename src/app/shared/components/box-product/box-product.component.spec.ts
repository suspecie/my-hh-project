import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProductComponent } from './box-product.component';

describe('BoxProductComponent', () => {
  let component: BoxProductComponent;
  let fixture: ComponentFixture<BoxProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoxProductComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
