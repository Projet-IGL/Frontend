import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface BilanRadiologique {
  time: string;
  nss: string;
  numcons: string;
  compteRendu: string;
  imageRadiographie: File | null;
  radiologueId: string ; 

}

@Injectable({
  providedIn: 'root'
})
export class AjouterBilanRadiologiqueService {
  private apiUrl = 'http://127.0.0.1:8000/api/creer_bilan_radiologique/'; // URL de votre API backend

  constructor(private http: HttpClient) {}

  // Méthode pour ajouter un bilan radiologique
  addBilan(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData); // Envoi des données avec FormData
  }

  // Méthode pour vérifier si un NSS existe côté backend
  checkNssExistence(nss: string): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/api/checkNss/?nss=${nss}`);
  }

  // Méthode pour vérifier si un numéro de consultation existe
  checkConsultationExistence(nss: string, numeroConsultation: string): Observable<{ exists: boolean; message?: string }> {
    const formData = new FormData();
    formData.append('nss', nss);
    formData.append('numcons', numeroConsultation);
  
    const apiUrl = 'http://127.0.0.1:8000/api/check_consultation_existence/'; // Nouvelle route
    return this.http.post<{ exists: boolean; message?: string }>(apiUrl, formData);
  }
}
