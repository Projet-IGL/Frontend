import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const laborantinGuard: CanActivateFn = (route, state) => {
     const authService = inject(AuthService);
        const router = inject(Router);
      
        const user = authService.getUser();
        if (user && user.role === 'Laborantin') {
          return true; // Accès autorisé
        } else {
          router.navigate(['/login']); // Redirection si non authentifié ou mauvais rôle
          return false; // Accès refusé
        }
};
