// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http'; // Import de HTTP_INTERCEPTORS

import { routes } from './app.routes';
import { AuthInterceptor } from './services/auth.interceptor'; // Import de l'interceptor

/**
 * Configuration de l'application Angular.
 * Cette configuration fournit les services nécessaires pour le bon fonctionnement de l'application.
 * 
 * @constant appConfig
 * @type {ApplicationConfig}
 * @description 
 * - Fournit la détection des changements de zone (zone change detection).
 * - Configure le routeur de l'application avec les routes définies.
 * - Fournit le client HTTP pour effectuer les requêtes.
 * - Configure un interceptor HTTP global pour l'application.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Fournir la détection des changements de zone
    provideRouter(routes), // Fournir le routeur avec les routes définies
    provideHttpClient(), // Fournir le client HTTP
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true 
    }, // Ajouter l'interceptor HTTP globalement
  ]
};
