import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class GeocodeService {

  private readonly API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  private readonly GOOGLE_MAPS_KEY = 'AIzaSyADsDnnDeEaRS3n-MCwGYMxDY3En0I2VQk';

  constructor(private http: HttpClient) {}

  public getLatLogByAddress(address: string): Observable<any> {
    const url = this.contactApiUrl(address);
    return this.http.get<any>(url)
      .pipe(
        map((resp) => {
          return resp;
        }),
      );
  }

  private contactApiUrl(address: string): string {
    const addressFormated = this.fixAddressToSearch(address);
    return `${this.API_URL}${addressFormated}&key=${this.GOOGLE_MAPS_KEY}`;
  }

  private fixAddressToSearch(address: string): string {
    return ((address.replace(/,/g, '')).split(' ')).join('+');
  }

}
