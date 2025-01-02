import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Service Angular pour la gestion des soins des patients.
 * Ce service interagit avec une API backend pour récupérer les données liées aux soins.
 */
@Injectable({
  providedIn: 'root' // Fournit ce service au niveau de la racine de l'application.
})
export class SoinService {

  /**
   * Représente le patient actuellement sélectionné ou défini.
   */
  patient: any;

  /**
   * Initialise une nouvelle instance de `SoinService`.
   * @param http - Service Angular `HttpClient` utilisé pour effectuer des requêtes HTTP.
   */
  constructor(private http: HttpClient) {}

  /**
   * Définit le patient actuellement sélectionné.
   * @param patient - Les informations du patient à définir.
   */
  setPatient(patient: any): void {
    this.patient = patient;
  }

  /**
   * Récupère les données des soins pour un patient donné en fonction de son NSS (Numéro de Sécurité Sociale).
   * @param nss - Le numéro de sécurité sociale du patient.
   * @returns Un `Observable` contenant les données des soins du patient.
   */
  getData(nss: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/soinsByNSS/'; // URL de l'API pour récupérer les soins.
    return this.http.post(url, { nss });
  }
}
