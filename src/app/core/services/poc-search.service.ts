import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class PocSearchService {

  constructor(private apollo: Apollo) { }

  public getPoc(latitude: string, longitude: string): any {
    return new Promise((resolve) => {
      this.apollo
      .query<any>({
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
      .subscribe(
        (data) => {
          console.log('data', data);
          resolve(data);
        },
      );

    });
  }
}
