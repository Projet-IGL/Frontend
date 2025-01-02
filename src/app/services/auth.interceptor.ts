// src/app/services/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

/**
 * Intercepteur HTTP pour ajouter automatiquement un jeton d'authentification aux requêtes sortantes.
 * Ce service intercepte toutes les requêtes HTTP sortantes et ajoute le jeton d'authentification
 * dans les en-têtes, si disponible.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /**
   * Constructeur de l'intercepteur d'authentification.
   * @param authService - Service d'authentification pour accéder au jeton d'authentification.
   */
  constructor(private authService: AuthService) {}

  /**
   * Intercepte une requête HTTP et ajoute un en-tête d'authentification si un jeton est présent.
   * @param req - La requête HTTP à intercepter.
   * @param next - Le gestionnaire suivant de la requête dans le pipeline.
   * @returns Un observable contenant l'événement HTTP traité.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken(); // Récupérer le jeton depuis le cookie

    if (token) {
      // Si un jeton est présent, ajouter l'en-tête d'authentification à la requête
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Token ${token}`
        }
      });

      return next.handle(cloned); // Passer la requête modifiée au prochain handler
    }

    // Si aucun jeton n'est trouvé, envoyer la requête sans modification
    return next.handle(req);
  }
}
