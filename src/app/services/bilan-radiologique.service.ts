import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BilanRadiologiqueService {
  private readonly apiUrl = 'http://127.0.0.1:8000/api/recuperer_bilan_radiologique/'; 

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir un bilan radiologique
  getBilanRadiologique(nss: string, numcons: string): Observable<any> {
    // Envoyer les paramètres NSS et consultationId dans le corps de la requête
    const body = { nss, numcons };
    return this.http.post(this.apiUrl, body);
  }
}
