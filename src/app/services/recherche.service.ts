import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service Angular pour la recherche de données patient.
 * Ce service interagit avec une API backend pour récupérer les informations d'un patient en fonction de son NSS.
 */
@Injectable({
  providedIn: 'root' // Fournit ce service au niveau de la racine de l'application.
})
export class RechercheService {

  /**
   * Initialise une nouvelle instance de `RechercheService`.
   * @param http - Service Angular `HttpClient` utilisé pour effectuer des requêtes HTTP.
   */
  constructor(private http: HttpClient) {}

  /**
   * Récupère les données d'un patient en fonction de son NSS (Numéro de Sécurité Sociale).
   * @param nss - Le numéro de sécurité sociale du patient.
   * @returns Un `Observable` contenant les informations du patient.
   */
  getData(nss: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/rechercher_dpi_par_nss/'; // URL de l'API pour effectuer la recherche.
    return this.http.post(url, { nss });
  }
}
