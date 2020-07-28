export interface IAddressInfo {
  results: [IAddressInfoResults] | [];
}

export interface IAddressInfoResults {
  geometry: IGeometry;
}

export interface IGeometry {
  location: ILocation;
}

export interface ILocation {
  lat: string;
  lng: string;
}
