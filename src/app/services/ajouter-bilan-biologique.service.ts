import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Interface définissant la structure d'un bilan biologique.
 */
interface BilanBiologique {
  /**
   * La date et heure auquelle le bilan est créé 
   */
  time: string;
    /**
   * Numéro de Sécurité Sociale (NSS) du patient associé au soin.
   * Il doit être un identifiant unique valide.
   */

  nss: string;
    /**
   * Numéro de la consultation associée.
   */

  numcons: string; // Ajout du champ numcons pour la consultation
    /**
   * le niveau de glycémie mesuré .
   */

  glycemie: number;
   /**
   * le niveau de la pression mesuré .
   */
  pression: number;
  /**
   * le niveau du cholesterol mesuré .
   */
  cholesterol: number;
   /**
   * le graphe de tendance .
   * null s'il n'est pas généré par le laborantin
   */
  graphImage: File | null; // Propriété pour l'image du graphique
   /**
   * l'identifiant du laborantin' .
   */
  laborantinId: string; // Identifiant du laborantin
}
/**
 * Service responsable de l'ajout des bilans biologiques.
 */
@Injectable({ 
  providedIn: 'root',
})
export class AjouterBilanBiologiqueService {
  // URL de l'API backend pour la gestion des bilans biologiques
  
  /**
   * URL de l'API backend pour la gestion des bilans biologiques.
   * Cette URL est utilisée pour envoyer des requêtes HTTP pour créer, lire, mettre à jour et supprimer des bilans biologiques.
  
  */
private apiUrl = 'http://127.0.0.1:8000/api/creer_bilan_biologique/';

/**
 * Constructeur du service.
 * Le service utilise `HttpClient` pour envoyer des requêtes HTTP à l'API backend.
 * @param http Injecte le service `HttpClient` qui permet de communiquer avec l'API.
 */
constructor(private http: HttpClient) {}


  /**
   * Méthode pour récupérer tous les bilans biologiques.
   * @returns Observable<BilanBiologique[]> - Un observable qui émet un tableau de bilans biologiques.
   */
  getBilans(): Observable<BilanBiologique[]> {
    return this.http.get<BilanBiologique[]>(this.apiUrl);
  }

  /**
   * Méthode pour ajouter un nouveau bilan biologique avec un fichier (image).
   * @param formData - Un objet FormData contenant les données à envoyer, y compris l'image du graphique.
   * @returns Observable<any> - Un observable qui émet la réponse de l'API.
   */
  addBilan(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);  // Envoi des données avec FormData
  }

  /**
   * Méthode pour mettre à jour un bilan biologique.
   * @param id - L'ID du bilan biologique à mettre à jour.
   * @param formData - Un objet FormData contenant les données à mettre à jour.
   * @returns Observable<any> - Un observable qui émet la réponse de l'API.
   */
  updateBilan(id: number, formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, formData);  // Mise à jour avec FormData
  }

  /**
   * Méthode pour supprimer un bilan biologique.
   * @param id - L'ID du bilan biologique à supprimer.
   * @returns Observable<void> - Un observable qui émet une réponse vide (void) une fois le bilan supprimé.
   */
  deleteBilan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Méthode pour vérifier si un NSS (numéro de sécurité sociale) existe côté backend.
   * @param nss - Le numéro de sécurité sociale à vérifier.
   * @returns Observable<any> - Un observable avec la réponse de l'API concernant l'existence du NSS.
   */
  checkNssExistence(nss: string): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/api/checkNss/?nss=${nss}`);
  }

  /**
   * Méthode pour vérifier si un numéro de consultation existe pour un NSS donné.
   * @param nss - Le numéro de sécurité sociale du patient.
   * @param numcons - Le numéro de consultation à vérifier.
   * @returns Observable<any> - Un observable contenant la réponse de l'API sur l'existence de la consultation.
   */
  checkConsultationExistence(nss: string, numcons: string): Observable<any> {
    const body = { nss, numcons };  // Envoi des deux paramètres dans le corps de la requête
    return this.http.post<any>('http://127.0.0.1:8000/api/check_consultation_existence_bilan_biologique/', body);
  }
}
