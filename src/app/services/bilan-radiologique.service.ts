import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Service Angular pour gérer les bilans radiologiques.
 */
@Injectable({
  providedIn: 'root', // Fournit ce service au niveau de la racine de l'application.
})
export class BilanRadiologiqueService {
  /**
   * URL de l'API pour récupérer les bilans radiologiques.
   * @private
   * @readonly
   */
  private readonly apiUrl = 'http://127.0.0.1:8000/api/recuperer_bilan_radiologique/';

  /**
   * Constructeur du service `BilanRadiologiqueService`.
   * @param http - Client HTTP Angular pour effectuer les requêtes vers l'API.
   */
  constructor(private http: HttpClient) {}

  /**
   * Récupère un bilan radiologique pour un patient donné.
   * @param nss - Numéro de sécurité sociale (NSS) du patient.
   * @param numcons - Numéro de consultation.
   * @returns Un observable contenant les données du bilan radiologique.
   */
  getBilanRadiologique(nss: string, numcons: string): Observable<any> {
    // Préparer le corps de la requête avec les paramètres NSS et numéro de consultation
    const body = { nss, numcons };
    return this.http.post(this.apiUrl, body);
  }
}
