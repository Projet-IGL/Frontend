import { Injectable } from '@angular/core';

/**
 * Service Angular pour gérer les informations sur un patient.
 * Les données du patient sont sauvegardées localement dans le stockage du navigateur (localStorage).
 */
@Injectable({
  providedIn: 'root', // Fournit ce service au niveau de la racine de l'application.
})
export class PatientService {
  /**
   * Clé utilisée pour stocker les informations du patient dans `localStorage`.
   */
  private storageKey = 'currentPatient';

  /**
   * Enregistre les informations du patient dans le stockage local.
   * @param patient - Les données du patient à sauvegarder.
   */
  setPatient(patient: any): void {
    this.saveToStorage(patient); // Sauvegarder dans le stockage
  }

  /**
   * Récupère les informations du patient depuis le stockage local.
   * @returns Les données du patient si elles existent, sinon `null`.
   */
  getPatient(): any {
    const storedPatient = this.getFromStorage();
    return storedPatient ? JSON.parse(storedPatient) : null; // Récupérer les données sauvegardées
  }

  /**
   * Supprime les informations du patient du stockage local.
   */
  clearPatient(): void {
    this.removeFromStorage();
  }

  /**
   * Sauvegarde les données du patient dans le stockage local sous forme de chaîne JSON.
   * @param patient - Les données du patient à sauvegarder.
   * @private
   */
  private saveToStorage(patient: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(patient)); // Sauvegarde dans localStorage
  }

  /**
   * Lit les données du patient depuis le stockage local.
   * @returns Les données sauvegardées sous forme de chaîne JSON ou `null` si aucune donnée n'existe.
   * @private
   */
  private getFromStorage(): string | null {
    return localStorage.getItem(this.storageKey); // Lecture depuis localStorage
  }

  /**
   * Supprime les données du patient du stockage local.
   * @private
   */
  private removeFromStorage(): void {
    localStorage.removeItem(this.storageKey); // Suppression du stockage
  }
}
