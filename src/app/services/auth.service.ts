import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'; // Pour gérer les cookies
import { map } from 'rxjs/operators';

// Interface définissant la structure d'un utilisateur
interface User {
  username: string;
  password: string;
  access: string;
  last_name: string;
  first_name: string;
  email: string;
  adresse: string;
  role: string;
  nss?: string; // Ajout du NSS pour les patients
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/Tests/login.json'; 

  private user: User | null = null; // Informations de l'utilisateur connecté

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  // Méthode pour envoyer les identifiants au backend et récupérer les informations utilisateur
  login(username: string, password: string): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
        // Recherche l'utilisateur, qu'il soit patient ou autre
        const user = data.users.find((u: User) => 
          (u.username === username || u.nss === username) && u.password === password
        );

        if (user) {
          return { access: user.access, user }; // Retourne le token et les informations utilisateur
        } else {
          throw new Error('Utilisateur ou mot de passe incorrect');
        }
      })
    );
  }

  // Sauvegarder le token dans un cookie
  saveToken(token: string) {
    this.cookieService.set('token', token, { secure: true, sameSite: 'Strict' });
  }

  // Récupérer le token depuis le cookie
  getToken() {
    return this.cookieService.get('token');
  }

  // Supprimer le token du cookie (déconnexion)
  deleteToken() {
    this.cookieService.delete('token');
  }

   // Sauvegarder les informations de l'utilisateur dans un cookie
   saveUser(user: any) {
    this.cookieService.set('user', JSON.stringify(user), { secure: true, sameSite: 'Strict' });
  }

  // Récupérer les informations de l'utilisateur depuis le cookie
  getUser() {
    const user = this.cookieService.get('user');
    return user ? JSON.parse(user) : null;
  }

  // Supprimer les informations de l'utilisateur du cookie
  deleteUser() {
    this.cookieService.delete('user');
  }

  // Supprimer les cookies liés (token et user)
  logout() {
    this.deleteToken();
    this.deleteUser();
  }

  
}
