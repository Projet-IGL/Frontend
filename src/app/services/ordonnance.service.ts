import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Service Angular pour gérer les ordonnances médicales.
 */
@Injectable({
  providedIn: 'root', // Fournit ce service au niveau de la racine de l'application.
})
export class OrdonnanceService {
  /**
   * URL de l'API pour sauvegarder une ordonnance.
   * @private
   */
  private apiUrl = 'http://127.0.0.1:8000/api/Rediger_ordonnance/';

  /**
   * Constructeur du service `OrdonnanceService`.
   * @param Http - Client HTTP Angular pour effectuer les requêtes vers l'API.
   */
  constructor(private Http: HttpClient) {}

  /**
   * Enregistre une ordonnance en envoyant les données à l'API.
   * @param ordonnanceData - Les données de l'ordonnance à sauvegarder.
   * @returns Un observable de la réponse de l'API.
   */
  saveOrdonnance(ordonnanceData: any): Observable<any> {
    console.log('Saving ordonnance data:', ordonnanceData);
    return this.Http.post<any>(this.apiUrl, ordonnanceData);
  }

  /**
   * Récupère les données d'une ordonnance en fonction du numéro de sécurité sociale (NSS) et du numéro de consultation.
   * @param nss - Le numéro de sécurité sociale du patient.
   * @param numero_consultation - Le numéro de la consultation.
   * @returns Un observable contenant les données de l'ordonnance.
   */
  getData(nss: string, numero_consultation: string): Observable<any> {
    const body = {
      nss: nss,
      numero_consultation: numero_consultation,
    };
    return this.Http.post<any>('http://127.0.0.1:8000/api/get_ordonnace/', body);
  }
}
