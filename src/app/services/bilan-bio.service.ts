import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BilanBioService {
 
  // URL statique de votre API backend Django
  private apiUrl = 'Tests/bilans.json'; // Remplacez cette URL par celle de votre API Django

  constructor(private http: HttpClient) {}

  // Fonction pour récupérer les données du bilan biologique avec une requête POST
  getBilanBio(nss: string, numeroConsultation: string): Observable<any> {
    const body = {
      nss: nss,
      numeroConsultation: numeroConsultation
    };
    return this.http.post<any>(this.apiUrl, body); // Envoi de la requête POST avec le corps
  }
}
