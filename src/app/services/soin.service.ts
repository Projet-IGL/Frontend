import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoinService {

 constructor(private http: HttpClient) {}
  patient: any;
  setPatient(patient: any): void {
    this.patient = patient;
  }
 
  getData(nss: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/soinsByNSS/';
    return this.http.post(url, { nss });
  }
}
