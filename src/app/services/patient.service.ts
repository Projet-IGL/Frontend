import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private storageKey = 'currentPatient';

  setPatient(patient: any): void {
    this.saveToStorage(patient); // Sauvegarder dans le stockage
  }

  getPatient(): any {
    const storedPatient = this.getFromStorage();
    return storedPatient ? JSON.parse(storedPatient) : null; // Récupérer les données sauvegardées
  }

  clearPatient(): void {
    this.removeFromStorage();
  }

  private saveToStorage(patient: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(patient)); // Sauvegarde dans localStorage
  }

  private getFromStorage(): string | null {
    return localStorage.getItem(this.storageKey); // Lecture depuis localStorage
  }

  private removeFromStorage(): void {
    localStorage.removeItem(this.storageKey); // Suppression du stockage
  }
}

