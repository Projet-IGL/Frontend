// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'; // Import de la bibliothèque pour gérer les cookies

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/Tests/login.json'; // URL de l'API de connexion

  constructor(private http: HttpClient, private cookieService: CookieService) {}

// Méthode pour envoyer les identifiants au backend et récupérer le jeton
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  // Sauvegarder le jeton dans un cookie
  saveToken(token: string) {
    this.cookieService.set('token', token, { secure: true, sameSite: 'Strict' });
  }

  // Récupérer le jeton depuis le cookie
  getToken() {
    return this.cookieService.get('token');
  }

  // Supprimer le jeton du cookie (logique de déconnexion)
  deleteToken() {
    this.cookieService.delete('token');
  }
}
