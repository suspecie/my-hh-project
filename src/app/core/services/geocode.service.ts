import { AppSettings } from './../../../environments/app-settings';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class GeocodeService {

  private readonly API_URL = AppSettings.URL_API_GOOGLE_MAPS;
  private readonly GOOGLE_MAPS_KEY = AppSettings.API_KEY_GOOGLE_MAPS;

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
