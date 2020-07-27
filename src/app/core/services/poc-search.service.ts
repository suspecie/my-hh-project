import { IPocSearchData, IPocSearchResult } from './../../shared/interfaces/poc-search.interface';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
// tslint:disable-next-line: import-name
import gql from 'graphql-tag';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PocSearchService {

  constructor(private apollo: Apollo) { }

  public getPoc(latitude: string, longitude: string): Observable<IPocSearchData> {
    return this.apollo
      .query<IPocSearchResult>({
        query: gql`
        query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
          pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
            __typename
            id
            status
            tradingName
            officialName
            deliveryTypes {
              __typename
              pocDeliveryTypeId
              deliveryTypeId
              price
              title
              subtitle
              active
            }
            paymentMethods {
              __typename
              pocPaymentMethodId
              paymentMethodId
              active
              title
              subtitle
            }
            pocWorkDay {
              __typename
              weekDay
              active
              workingInterval {
                __typename
                openingTime
                closingTime
              }
            }
            address {
              __typename
              address1
              address2
              number
              city
              province
              zip
              coordinates
            }
            phone {
              __typename
              phoneNumber
            }
          }
        }
        `,
        variables: {
          algorithm: 'NEAREST',
          lat: latitude,
          long: longitude,
          now: new Date(),
        },
      })
      .pipe(
        (data) => {
          return data;
        },
      );
  }
}
