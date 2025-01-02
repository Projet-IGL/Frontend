import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Interface définissant la structure d'un bilan radiologique.
 */
/**
 * Interface définissant la structure d'un bilan radiologique.
 * Un bilan radiologique contient des informations médicales liées aux examens radiologiques d'un patient.
 */
interface BilanRadiologique {
  /**
   * La date et l'heure auxquelles le bilan radiologique est créé.
   * @example "2025-01-02T15:30:00"
   */
  time: string;

  /**
   * Le numéro de Sécurité Sociale (NSS) du patient associé à l'examen radiologique.
   * Il doit être un identifiant unique valide pour chaque patient.
   */
  nss: string;

  /**
   * Le numéro de la consultation associée à ce bilan radiologique.
   * Il est lié à un épisode de soins spécifique pour le patient.
   */
  numcons: string;

  /**
   * Le compte-rendu détaillé de l'examen radiologique.
   * Ce texte peut contenir des observations, diagnostics ou autres informations pertinentes.
   */
  compteRendu: string;

  /**
   * L'image de la radiographie associée au bilan.
   * Peut être une image au format fichier, ou `null` si l'image n'est pas disponible.
   */
  imageRadiographie: File | null;

  /**
   * Identifiant unique du radiologue ayant effectué l'examen.
   * Permet d'associer l'examen à un radiologue spécifique.
   */
  radiologueId: string;
}
/**
 * Service responsable de l'ajout des bilans radiologiques.
 */
@Injectable({
  providedIn: 'root'
})
export class AjouterBilanRadiologiqueService {
  // URL de l'API backend pour la création de bilan radiologique
 /**
 * URL de l'API backend pour la gestion des bilans radiologiques.
 * Cette URL est utilisée pour envoyer des requêtes HTTP pour créer, lire, mettre à jour et supprimer des bilans radiologiques.
 */
private apiUrl = 'http://127.0.0.1:8000/api/creer_bilan_radiologique/';

/**
 * Constructeur du service.
 * Le service utilise `HttpClient` pour envoyer des requêtes HTTP à l'API backend.
 * @param http Injecte le service `HttpClient` qui permet de communiquer avec l'API.
 */
constructor(private http: HttpClient) {}

  /**
   * Méthode pour ajouter un bilan radiologique.
   * Cette méthode envoie les données sous forme de `FormData`, y compris une image radiographique.
   * @param formData - Les données à envoyer, encapsulées dans un objet `FormData`.
   * @returns Observable<any> - Un observable de la réponse de l'API.
   */
  addBilan(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData); // Envoi des données avec FormData
  }

  /**
   * Méthode pour vérifier si un NSS existe côté backend.
   * Cette méthode effectue une requête GET pour vérifier si un NSS existe dans la base de données.
   * @param nss - Le numéro de sécurité sociale à vérifier.
   * @returns Observable<any> - Un observable contenant la réponse de l'API.
   */
  checkNssExistence(nss: string): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/api/checkNss/?nss=${nss}`);
  }

  /**
   * Méthode pour vérifier si un numéro de consultation existe.
   * Cette méthode envoie une requête POST avec les informations NSS et numéro de consultation pour vérifier leur existence.
   * @param nss - Le numéro de sécurité sociale du patient.
   * @param numeroConsultation - Le numéro de consultation à vérifier.
   * @returns Observable<{ exists: boolean; message?: string }> - Un observable contenant un objet avec un champ `exists` et éventuellement un message d'erreur.
   */
  checkConsultationExistence(nss: string, numeroConsultation: string): Observable<{ exists: boolean; message?: string }> {
    const formData = new FormData();
    formData.append('nss', nss);
    formData.append('numcons', numeroConsultation);
  
    const apiUrl = 'http://127.0.0.1:8000/api/check_consultation_existence/'; // Nouvelle route
    return this.http.post<{ exists: boolean; message?: string }>(apiUrl, formData);
  }
}
