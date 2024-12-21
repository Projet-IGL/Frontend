// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http'; // Import de HTTP_INTERCEPTORS

import { routes } from './app.routes';
import { AuthInterceptor } from './services/auth.interceptor'; // Import de l'interceptor

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), // Fournir le client HTTP
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, // Ajouter l'interceptor globalement
  ]
};
