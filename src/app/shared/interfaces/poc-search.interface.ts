export interface IPocSearchData {
  data: IPocSearchResult;
}

export interface IPocSearchResult {
  pocSearch: [IPocSearch];
}

export interface IPocSearch {
  id: string;
  tradingName: string;
  address: [IPocSearchAdress];
}

export interface IPocSearchAdress {
  address1: string;
  address2: string;
  number: string;
  city: string;
  province: string;
}
