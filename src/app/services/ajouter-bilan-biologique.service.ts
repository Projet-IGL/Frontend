import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface BilanBiologique {
  time: string;
  nss: string;
  numcons: string; // Ajout du champ numcons
  glycemie: number;
  pression: number;
  cholesterol: number;
  graphImage: File | null; // Propriété pour l'image du graphique
  laborantinId: string ; 
}

@Injectable({
  providedIn: 'root',
})
export class AjouterBilanBiologiqueService {
  private apiUrl = 'http://127.0.0.1:8000/api/creer_bilan_biologique/'; // URL de votre API backend json-server

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les bilans biologiques
  getBilans(): Observable<BilanBiologique[]> {
    return this.http.get<BilanBiologique[]>(this.apiUrl);
  }

  // Méthode pour ajouter un nouveau bilan biologique avec un fichier (image)
  addBilan(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);  // Envoi des données avec FormData
  }

  // Méthode pour mettre à jour un bilan biologique
  updateBilan(id: number, formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, formData);  // Mise à jour avec FormData
  }

  // Méthode pour supprimer un bilan biologique
  deleteBilan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour vérifier si un NSS existe
  checkNssExistence(nss: string): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/api/checkNss/?nss=${nss}`);
  }

  // Méthode pour vérifier si un numéro de consultation existe
  checkConsultationExistence(nss: string, numcons: string): Observable<any> {
    const body = { nss, numcons };  // Envoi des deux paramètres dans le corps de la requête
    return this.http.post<any>('http://127.0.0.1:8000/api/check_consultation_existence_bilan_biologique/', body);
  }
  
}
