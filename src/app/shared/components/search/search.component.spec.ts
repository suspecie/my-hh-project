import { IAddressInfo, IAddressInfoResults } from './../../interfaces/address-info.interface';
import { ProductsComponent } from './../../../features/products/products.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Apollo } from 'apollo-angular';
import { PocSearchService } from './../../../core/services/poc-search.service';
import { GeocodeService } from './../../../core/services/geocode.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { Router, Routes } from '@angular/router';
import { of } from 'rxjs';
import { IPocSearchData } from '../../interfaces/poc-search.interface';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;
  let geocodeService: GeocodeService;
  let pocSearchService: PocSearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
      ],
      providers: [
        PocSearchService,
        GeocodeService,
        Apollo,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    geocodeService = TestBed.inject(GeocodeService);
    pocSearchService = TestBed.inject(PocSearchService);
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {

    it('should call onSubmit', () => {
      // Arrange
      const btnSearch = document.querySelector('.search__group--button') as HTMLElement;
      const spyComponent = jest.spyOn(component, 'onSubmit');
      // Action
      btnSearch.click();
      // Assert
      expect(spyComponent).toHaveBeenCalled();
    });

  });

  describe('clear', () => {

    it('should call clear', () => {
      // Arrange
      const btnClose = document.querySelector('.search_group--clear') as HTMLElement;
      const spyComponent = jest.spyOn(component, 'clear');
      // Action
      btnClose.click();
      // Assert
      expect(spyComponent).toHaveBeenCalled();
    });

    it('should change isLoading to false when clear', () => {
      // Arrange
      const btnClose = document.querySelector('.search_group--clear') as HTMLElement;
      const spyComponent = jest.spyOn(component, 'clear');
      // Action
      btnClose.click();
      // Assert
      expect(component.isLoading).toBeFalsy();
    });

    it('should change isError to false when clear', () => {
      // Arrange
      const btnClose = document.querySelector('.search_group--clear') as HTMLElement;
      const spyComponent = jest.spyOn(component, 'clear');
      // Action
      btnClose.click();
      // Assert
      expect(component.isError).toBeFalsy();
    });

    it('should change isCleared to true when clear', () => {
      // Arrange
      const btnClose = document.querySelector('.search_group--clear') as HTMLElement;
      const spyComponent = jest.spyOn(component, 'clear');
      // Action
      btnClose.click();
      // Assert
      expect(component.isCleared).toBeTruthy();
    });

    it('should change input address to empty when clear', () => {
      // Arrange
      const btnClose = document.querySelector('.search_group--clear') as HTMLElement;
      const spyComponent = jest.spyOn(component, 'clear');
      const inputAddress = component.addressForm.controls['address'].value;
      // Action
      btnClose.click();
      // Assert
      expect(inputAddress).toBe('');
    });

  });

  describe('goToProducts', () => {

    it('should call route /products', () => {
      // Arrange
      const id = '1';
      const navigateSpy = spyOn(router, 'navigate');
      // Action
      component.goToProducts(id);
      // Assert
      expect(navigateSpy).toHaveBeenCalledWith(['/produtos'], { state: { data: { pocId: id } } });
    });

  });

  describe('getLatLogByAddress', () => {

    it('should call getLatLogByAddress with address', () => {
      // Arrange
      const mockAddress: IAddressInfo = {
        results: [{
          geometry: {
            location: {
              lat: '23.0000',
              lng: '10.0000',
            },
          },
        }],
      };

      jest.spyOn(geocodeService, 'getLatLogByAddress').mockImplementation(() => of(mockAddress));
      const pocSearchServiceSpy  = jest.spyOn(pocSearchService, 'getPoc');
      // Action
      component.onSubmit();
      // Assert
      expect(pocSearchServiceSpy).toHaveBeenCalled();
    });

    it('should call getLatLogByAddress with no address', () => {
      // Arrange
      const mockAddress: IAddressInfo = {
        results: [],
      };

      jest.spyOn(geocodeService, 'getLatLogByAddress').mockImplementation(() => of(mockAddress));
      const pocSearchServiceSpy  = jest.spyOn(pocSearchService, 'getPoc');
      // Action
      component.onSubmit();
      // Assert
      expect(component.isError).toBeTruthy();
    });

  });

  describe('getPocSearch', () => {

    it('should call getPocSearch with poc', () => {
      // Arrange
      const mockPocSearch: IPocSearchData = {
        data: {
          pocSearch: [{
            id: '1',
            tradingName: 'Test Test',
            address: {
              address1: 'Rua',
              address2: 'Test',
              number: '123',
              city: 'Cabreuva',
              province: 'SP',
            },
          }],
        },
      };

      const mockAddress: IAddressInfo = {
        results: [{
          geometry: {
            location: {
              lat: '23.0000',
              lng: '10.0000',
            },
          },
        }],
      };

      jest.spyOn(geocodeService, 'getLatLogByAddress').mockImplementation(() => of(mockAddress));
      jest.spyOn(pocSearchService, 'getPoc').mockImplementation(() => of(mockPocSearch));
      // Action
      component.onSubmit();
      // Assert
      expect(component.pocs.length).toBeGreaterThan(0);
    });

    it('should call getPocSearch without poc', () => {
      // Arrange
      const mockPocSearch: IPocSearchData = {
        data: {
          pocSearch: [],
        },
      };

      const mockAddress: IAddressInfo = {
        results: [{
          geometry: {
            location: {
              lat: '23.0000',
              lng: '10.0000',
            },
          },
        }],
      };

      jest.spyOn(geocodeService, 'getLatLogByAddress').mockImplementation(() => of(mockAddress));
      jest.spyOn(pocSearchService, 'getPoc').mockImplementation(() => of(mockPocSearch));
      // Action
      component.onSubmit();
      // Assert
      expect(component.isError).toBeTruthy();
    });

  });

});
