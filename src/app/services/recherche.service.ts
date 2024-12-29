import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  constructor(private http: HttpClient) {}

  getData(nss: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/rechercher_dpi_par_nss/';
    return this.http.post(url, { nss });
  }

}
