import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
  private apiUrl = 'http://127.0.0.1:8000/api/Rediger_ordonnance/';
  constructor(private Http: HttpClient ) {}

  saveOrdonnance(ordonnanceData: any): Observable<any> {
    console.log('Saving ordonnance data:', ordonnanceData);
    return this.Http.post<any>(this.apiUrl, ordonnanceData);
  }

  getData(nss: string, numero_consultation: string): Observable<any> {
      const body = {
        nss: nss,
        numero_consultation: numero_consultation
      };
      return this.Http.post<any>('http://127.0.0.1:8000/api/get_ordonnace/', body);    }
}
