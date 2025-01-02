import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'; // Pour gérer les cookies
import { map } from 'rxjs/operators';
import { ConsultationService } from './consultation.service';

/**
 * Interface définissant la structure d'un utilisateur.
 */
/**
 * Interface représentant un utilisateur du système.
 * Un utilisateur peut être un administrateur, un médecin, ou un patient, avec des informations associées.
 */
interface User {
  /**
   * Le nom d'utilisateur unique pour l'identification dans le système.
   * Il sert généralement à se connecter au système.
   */
  username: string;

  /**
   * Le mot de passe associé à l'utilisateur pour l'authentification.
   * Ce champ doit être protégé et ne jamais être exposé dans des réponses non sécurisées.
   */
  password: string;

  /**
   * Le niveau d'accès de l'utilisateur.
   * Par exemple, cela pourrait être 'admin', 'medecin', 'patient', etc.
   */
  access: string;

  /**
   * Le nom de famille de l'utilisateur.
   * Utilisé pour les identifications et dans les documents ou rapports.
   */
  last_name: string;

  /**
   * Le prénom de l'utilisateur.
   * Utilisé pour les identifications et dans les documents ou rapports.
   */
  first_name: string;

  /**
   * L'adresse email de l'utilisateur.
   * Permet d'envoyer des notifications ou de vérifier l'identité.
   */
  email: string;

  /**
   * L'adresse physique de l'utilisateur.
   * Utilisée pour des correspondances physiques ou pour l'enregistrement dans la base de données.
   */
  adresse: string;

  /**
   * Le rôle ou la fonction de l'utilisateur dans le système.
   * Cela peut être 'admin', 'medecin', 'patient', etc.
   */
  role: string;

  /**
   * Le numéro de Sécurité Sociale (NSS) de l'utilisateur (optionnel).
   * Ce champ est généralement utilisé pour les patients afin d'associer un identifiant unique au système de santé.
   * @optional
   */
  nss?: string;
}


/**
 * Service d'authentification permettant la gestion des utilisateurs et des sessions.
 */
@Injectable({
  providedIn: 'root', // Fournit ce service au niveau racine de l'application
})
export class AuthService {
  /**
   * URL de l'API pour la connexion.
   * @private
   */
  private apiUrl = 'http://127.0.0.1:8000/api/login/';

  /**
   * Informations de l'utilisateur connecté.
   * @private
   */
  private user: User | null = null;

  /**
   * Constructeur du service `AuthService`.
   * @param http - Client HTTP Angular pour communiquer avec l'API backend.
   * @param cookieService - Service pour gérer les cookies.
   * @param consultationService - Service pour gérer les consultations utilisateur.
   */
  constructor(private http: HttpClient, private cookieService: CookieService, private consultationService: ConsultationService) {}

  /**
   * Authentifie un utilisateur en envoyant ses identifiants au backend.
   * @param username - Nom d'utilisateur.
   * @param password - Mot de passe.
   * @returns Un observable contenant les informations de l'utilisateur.
   */
  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.apiUrl, { username, password }).pipe(
      map(user => {
        console.log('Réponse du backend :', user); // Vérifiez la structure ici
        if (user && user.role) {
          this.saveToken(user.access);
          this.saveUser(user);
        }
        return user;
      })
    );
  }
  
  /**
   * Sauvegarde le token d'accès dans un cookie.
   * @param token - Jeton d'accès.
   */
  saveToken(token: string) {
    this.cookieService.set('token', token, { secure: true, sameSite: 'Strict' });
  }

  /**
   * Récupère le token d'accès depuis les cookies.
   * @returns Le token d'accès ou une chaîne vide s'il n'existe pas.
   */
  getToken() {
    return this.cookieService.get('token');
  }

  /**
   * Supprime le token d'accès des cookies.
   */
  deleteToken() {
    this.cookieService.delete('token');
  }

  /**
   * Sauvegarde les informations de l'utilisateur dans un cookie.
   * @param user - Informations de l'utilisateur.
   */
  saveUser(user: any) {
    this.cookieService.set('user', JSON.stringify(user), { secure: true, sameSite: 'Strict' });
    console.log(user);
  }

  /**
   * Récupère les informations de l'utilisateur depuis les cookies.
   * @returns Les informations de l'utilisateur ou `null` si elles n'existent pas.
   */
  getUser() {
    const user = this.cookieService.get('user');
    return user ? JSON.parse(user) : null;
  }

  /**
   * Supprime les informations de l'utilisateur des cookies.
   */
  deleteUser() {
    this.cookieService.delete('user');
  }

  /**
   * Déconnecte l'utilisateur en supprimant les cookies liés et en vidant les données utilisateur.
   */
  logout() {
    this.deleteToken();
    this.deleteUser();
    this.cookieService.deleteAll();
    this.consultationService.clearConsultation();
  }
}
