import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Représentation d'un soin médical.
 * Cet objet contient toutes les informations nécessaires pour définir un soin effectué pour un patient.
 */
interface Soin {
  /**
   * Date et Heure aux quelles le soin a été effectué.
   */
  time: string;

  /**
   * Numéro de Sécurité Sociale (NSS) du patient associé au soin.
   * Il doit être un identifiant unique valide.
   */
  nss: string;

  /**
   * Description détaillée du soin effectué.
   * Cela peut inclure des informations sur les procédures, traitements ou interventions.
   */
  details: string;

  /**
   * Observations effectuées pendant le soin.
   * Par exemple, l'état du patient ou les effets du traitement.
   */
  observations: string;

  /**
   * Indique si un médicament a été administré pendant le soin.
   * Valeur booléenne : `true` si un médicament a été administré, sinon `false`.
   */
  medicamentAdministre: boolean;

  /**
   * Identifiant de l'infirmier ayant effectué le soin.
   * Peut être `null` si l'infirmier n'est pas spécifié ou inconnu.
   */
  infirmierId: string | null;
}

/**
 * Service responsable de la gestion des soins.
 * Permet l'ajout de soins et la vérification de l'existence des patients via leur NSS.
 */
@Injectable({
  providedIn: 'root'
})
export class AjouterSoinService {
  /**
   * URL de l'API backend utilisée pour enregistrer un soin.
   */
  private apiUrl = 'http://127.0.0.1:8000/api/faire_soin/';

  /**
   * Initialise le service AjouterSoinService avec le client HTTP.
   * @param http - Service Angular HttpClient injecté pour effectuer des requêtes HTTP.
   */
  constructor(private http: HttpClient) {}

  /**
   * Enregistre un soin dans la base de données via une requête POST.
   * Envoie un objet `Soin` contenant toutes les informations nécessaires au backend.
   *
   * @param soin - Objet contenant les détails du soin à enregistrer.
   * @returns Un Observable contenant l'objet `Soin` ajouté en réponse de l'API.
   */
  addSoin(soin: Soin): Observable<Soin> {
    return this.http.post<Soin>(this.apiUrl, soin);
  }

  /**
   * Vérifie si un patient avec un numéro NSS spécifique existe dans la base de données.
   * Utilisé pour s'assurer que le patient est valide avant d'ajouter un soin.
   *
   * @param nss - Numéro de Sécurité Sociale du patient à vérifier.
   * @returns Un Observable contenant la réponse de l'API, confirmant ou infirmant l'existence du NSS.
   */
  checkNssExistence(nss: string): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/api/checkNss/?nss=${nss} `);
  }
}
