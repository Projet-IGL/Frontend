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
  getData(): Observable<any> {
    return this.http.get('/Tests/Soin.json');
  }
}
