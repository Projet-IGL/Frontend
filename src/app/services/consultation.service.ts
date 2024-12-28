import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService {
  private apiUrl = 'http://127.0.0.1:8000/api/creer_consultation/'; // Update the URL to match your json-server setup

  constructor(private Http: HttpClient) {}

  saveConsultation(consultationData: any): Observable<any> {
    console.log('Saving consultation data:', consultationData);
    return this.Http.post<any>(this.apiUrl, consultationData); // Save the data in the JSON file
  }
}
