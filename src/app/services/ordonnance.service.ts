import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
  private apiUrl = 'http://localhost:3001/ordonnances'; 
  constructor(private Http: HttpClient ) {}

  saveOrdonnance(ordonnanceData: any): Observable<any> {
    console.log('Saving ordonnance data:', ordonnanceData);
    return this.Http.post<any>(this.apiUrl, ordonnanceData); 
  }
  getData(): Observable<any> {
      return this.Http.get('/Tests/Ordonnance.json');
    }
}
