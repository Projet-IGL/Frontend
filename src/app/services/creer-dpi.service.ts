import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service Angular pour créer un Dossier Patient Informatisé (DPI).
 */
@Injectable({
  providedIn: 'root', // Fournit ce service au niveau de la racine de l'application.
})
export class CreerDPIService {
  /**
   * URL de l'API pour créer un DPI.
   * @private
   */
  private apiUrl = 'http://127.0.0.1:8000/api/creer_patient/';

  /**
   * Constructeur du service `CreerDPIService`.
   * @param http - Client HTTP Angular pour effectuer les requêtes vers l'API.
   */
  constructor(private http: HttpClient) {}

  /**
   * Crée un Dossier Patient Informatisé (DPI) en envoyant les informations du patient à l'API.
   * 
   * @param nom - Nom du patient.
   * @param prenom - Prénom du patient.
   * @param email - Adresse email du patient.
   * @param nss - Numéro de sécurité sociale du patient.
   * @param numtel - Numéro de téléphone principal du patient.
   * @param numtelurg - Numéro de téléphone d'urgence.
   * @param username - Nom d'utilisateur pour le compte du patient.
   * @param password - Mot de passe pour le compte du patient.
   * @param dateDeNaissance - Date de naissance du patient.
   * @param adresse - Adresse du patient.
   * @param medecin - Médecin référent du patient.
   * @param mutuelle - Mutuelle du patient.
   * @param antécédents -Antécédents médecaux du patient
   * @returns Un observable contenant la réponse de l'API.
   */
  CreerDpi(
    nom: string,
    prenom: string,
    email: string,
    nss: string,
    numtel: string,
    numtelurg: string,
    username: string,
    password: string,
    dateDeNaissance: Date,
    adresse: string,
    medecin: string,
    mutuelle: string,
    antécedents:string,
  ): Observable<any> {
    const newDpi = { nom, prenom, email, nss, numtel, numtelurg, username, password, dateDeNaissance, adresse, medecin, mutuelle, antécedents };
    console.log('Mocking a request with:', newDpi);
    return this.http.post<any>(this.apiUrl, newDpi); 
  }
}
