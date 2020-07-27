import { IAllCategory, ICategoriesData } from './../../shared/interfaces/categories.interface';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
// tslint:disable-next-line: import-name
import gql from 'graphql-tag';

@Injectable()
export class AllCategoryService {

  constructor(private apollo: Apollo) { }

  public getAllCategories(): Observable<ICategoriesData> {
    return this.apollo
      .query<IAllCategory>({
        query: gql`
          query allCategoriesSearch {
            allCategory{
              title
              id
            }
          }
        `,
      })
      .pipe(
        (data) => {
          return data;
        },
      );
  }

}
