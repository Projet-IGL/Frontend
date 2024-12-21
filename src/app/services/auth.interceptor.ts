// src/app/services/auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken(); // Récupérer le jeton depuis le cookie

    if (token) {
      // Ajouter le jeton dans les en-têtes de la requête
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Token ${token}`
        }
      });

      return next.handle(cloned); // Passer la requête modifiée au prochain handler
    }

    return next.handle(req); // Si pas de jeton, envoyer la requête sans ajout d'en-tête
  }
}
