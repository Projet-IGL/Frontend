import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BilanRadiologiqueService {
  private readonly apiUrl = 'Tests/bilans.json'; // URL fixe

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir un bilan radiologique
  getBilanRadiologique(nss: string, consultationId: string): Observable<any> {
    // Envoyer les paramètres NSS et consultationId dans le corps de la requête
    const body = { nss, consultationId };
    return this.http.post(this.apiUrl, body);
  }
}
