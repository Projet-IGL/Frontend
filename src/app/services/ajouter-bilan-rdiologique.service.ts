import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface BilanRadiologique {
  time: string;
  nss: string;
  datecons: string;
  compteRendu: string;
  imageRadiographie: string | null;
  radiologueId: string ; 

}

@Injectable({
  providedIn: 'root'
})
export class AjouterBilanRadiologiqueService {
  private apiUrl = 'http://localhost:3006/bilans-radiologiques'; // URL de votre API backend

  constructor(private http: HttpClient) {}

  // Méthode pour ajouter un bilan radiologique
  addBilan(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData); // Envoi des données avec FormData
  }

  // Méthode pour vérifier si un NSS existe côté backend
  checkNssExistence(nss: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/checkNss/${nss}`);
  }

  // Méthode pour vérifier si un numéro de consultation existe côté backend
  checkConsultationExistence(numcons: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/checkConsultation/${numcons}`);
  }
}
