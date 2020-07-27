import { IProductsData, IPoc } from './../../shared/interfaces/products.interface';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
// tslint:disable-next-line: import-name
import gql from 'graphql-tag';

@Injectable()
export class ProductsService {

  constructor(private apollo: Apollo) { }

  public getProductsByCategory(idPoc: string, idCategory: number): Observable<IProductsData> {
    return this.apollo
      .query<IPoc>({
        query: gql`
        query poc($id: ID!, $categoryId: Int, $search: String){
          poc(id: $id) {
            id
            products(categoryId: $categoryId, search: $search) {
              id
              title
              rgb
              images {
                url
              }
              productVariants {
                availableDate
                productVariantId
                price
                inventoryItemId
                shortDescription
                title
                published
                volume
                volumeUnit
                description
                subtitle
                components {
                  id
                  productVariantId
                  productVariant {
                    id
                    title
                    description
                    shortDescription
                  }
                }
              }
            }
          }
        }
        `,
        variables: {
          id: idPoc,
          search: '',
          categoryId: idCategory,
        },
      })
      .pipe(
        (data) => {
          return data;
        },
      );
  }

  public getAllProducts(idPoc: string): Observable<IProductsData> {
    return this.apollo
      .query<IPoc>({
        query: gql`
        query poc($id: ID!, $categoryId: Int, $search: String){
          poc(id: $id) {
            id
            products(categoryId: $categoryId, search: $search) {
              id
              title
              rgb
              images {
                url
              }
              productVariants {
                availableDate
                productVariantId
                price
                inventoryItemId
                shortDescription
                title
                published
                volume
                volumeUnit
                description
                subtitle
                components {
                  id
                  productVariantId
                  productVariant {
                    id
                    title
                    description
                    shortDescription
                  }
                }
              }
            }
          }
        }
        `,
        variables: {
          id: idPoc,
          search: '',
          categoryId: null,
        },
      })
      .pipe(
        (data) => {
          return data;
        },
      );
  }
}
