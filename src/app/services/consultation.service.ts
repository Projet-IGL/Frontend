import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service Angular pour gérer les consultations médicales.
 */
@Injectable({
  providedIn: 'root', // Fournit ce service au niveau de la racine de l'application.
})
export class ConsultationService {
  /**
   * URL de l'API pour créer une consultation.
   * @private
   */
  private apiUrl = 'http://127.0.0.1:8000/api/creer_consultation/';

  /**
   * Clé utilisée pour stocker les consultations dans le `localStorage`.
   * @private
   */
  private storageKey = 'currentConsultation';

  /**
   * Constructeur du service `ConsultationService`.
   * @param http - Client HTTP Angular pour effectuer les requêtes vers l'API.
   */
  constructor(private http: HttpClient) {}

  /**
   * Enregistre une consultation en envoyant les données à l'API.
   * @param consultationData - Données de la consultation à enregistrer.
   * @returns Un observable contenant la réponse de l'API.
   */
  saveConsultation(consultationData: any): Observable<any> {
    console.log('Saving consultation data:', consultationData);
    return this.http.post<any>(this.apiUrl, consultationData); // Envoie les données à l'API.
  }

  /**
   * Sauvegarde une consultation dans le stockage local.
   * @param consultation - Données de la consultation à sauvegarder.
   */
  setConsultation(consultation: any): void {
    this.saveToStorage(consultation); // Sauvegarde dans le `localStorage`.
  }

  /**
   * Récupère les données de la consultation depuis le stockage local.
   * @returns Les données de la consultation ou `null` si aucune donnée n'est stockée.
   */
  getConsultation(): any {
    const storedConsultation = this.getFromStorage();
    return storedConsultation ? JSON.parse(storedConsultation) : null;
  }

  /**
   * Supprime les données de la consultation du stockage local.
   */
  clearConsultation(): void {
    this.removeFromStorage();
  }

  /**
   * Enregistre les données de consultation dans le `localStorage`.
   * @private
   * @param consultation - Données de la consultation à sauvegarder.
   */
  private saveToStorage(consultation: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(consultation));
  }

  /**
   * Récupère les données de consultation depuis le `localStorage`.
   * @private
   * @returns Les données stockées sous forme de chaîne JSON ou `null` si aucune donnée n'est disponible.
   */
  private getFromStorage(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  /**
   * Supprime les données de consultation du `localStorage`.
   * @private
   */
  private removeFromStorage(): void {
    localStorage.removeItem(this.storageKey);
  }

  /**
   * Récupère les consultations pour un patient spécifique à partir de son numéro de sécurité sociale (NSS).
   * @param nss - Numéro de sécurité sociale du patient.
   * @returns Un observable contenant les données des consultations associées au NSS.
   */
  getData(nss: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/ConsultationbyNSS/';
    return this.http.post(url, { nss });
  }
}
