
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService{

  constructor(private http: HttpClient) { } 
  
  private apiUrl = 'http://127.0.0.1:8000/api/creer_consultation/'; // Update the URL to match your json-server setup

  saveConsultation(consultationData: any): Observable<any> {
    console.log('Saving consultation data:', consultationData);
    return this.http.post<any>(this.apiUrl, consultationData); // Save the data in the JSON file
  }
    private storageKey = 'currentConsultation';

  setConsultation(consultation: any): void {
    this.saveToStorage(consultation); // Sauvegarder dans le stockage
  }

  getConsultation(): any {
    const storedConsultation = this.getFromStorage();
    return storedConsultation ? JSON.parse(storedConsultation) : null; // Récupérer les données sauvegardées
  }

  clearConsultation(): void {
    this.removeFromStorage();
  }

  private saveToStorage(consultation: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(consultation)); // Sauvegarde dans localStorage
  }

  private getFromStorage(): string | null {
    return localStorage.getItem(this.storageKey); // Lecture depuis localStorage
  }

  private removeFromStorage(): void {
    localStorage.removeItem(this.storageKey); // Suppression du stockage
  }
  
    getData(): Observable<any> {
      return this.http.get('/Tests/Consultation.json');
    }



}
