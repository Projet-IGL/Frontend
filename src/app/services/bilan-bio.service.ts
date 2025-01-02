import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service Angular pour gérer les bilans biologiques.
 */
@Injectable({
  providedIn: 'root', // Fournit ce service au niveau racine de l'application.
})
export class BilanBioService {
  /**
   * URL de l'API pour récupérer les bilans biologiques.
   * @private
   */
  private apiUrl = 'http://127.0.0.1:8000/api/recuperer_bilan_biologique/'; // Remplacez cette URL par celle de votre API backend

  /**
   * Constructeur du service `BilanBioService`.
   * @param http - Client HTTP Angular pour effectuer les requêtes vers l'API.
   */
  constructor(private http: HttpClient) {}

  /**
   * Récupère les données d'un bilan biologique pour un patient donné.
   * @param nss - Numéro de sécurité sociale (NSS) du patient.
   * @param numcons - Numéro de consultation.
   * @returns Un observable contenant les données du bilan biologique.
   */
  getBilanBio(nss: string, numcons: string): Observable<any> {
    // Préparation du corps de la requête avec les paramètres NSS et numéro de consultation
    const body = {
      nss: nss,
      numcons: numcons,
    };
    return this.http.post<any>(this.apiUrl, body); // Envoi de la requête POST avec les données
  }
}
