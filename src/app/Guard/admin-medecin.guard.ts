import { CanActivateFn } from '@angular/router'; // Importation de l'interface CanActivateFn pour protéger les routes
import { inject } from '@angular/core'; // Utilisation de l'injection de dépendances
import { Router } from '@angular/router'; // Importation du service Router pour la redirection
import { AuthService } from '../services/auth.service'; // Importation du service AuthService pour vérifier l'authentification

/**
 * Garde de route pour protéger l'accès aux pages réservées aux utilisateurs ayant le rôle "Medecin" ou "Administrateur".
 * 
 * Cette garde empêche l'accès à la route si l'utilisateur n'a pas l'un des rôles autorisés
 * ou s'il n'est pas authentifié. En cas d'accès refusé, l'utilisateur est redirigé vers la page de connexion.
 * 
 * @param {import('@angular/router').ActivatedRouteSnapshot} route - L'objet de la route demandée.
 * @param {import('@angular/router').RouterStateSnapshot} state - L'état de la route actuelle.
 * 
 * @returns {boolean} - Retourne `true` si l'utilisateur est authentifié et a un rôle autorisé, sinon `false`.
 */
export const adminMedecinGuard: CanActivateFn = (route, state) => {
  
   // Injection des services nécessaires
   const authService = inject(AuthService); // Service d'authentification pour vérifier l'utilisateur connecté
   const router = inject(Router); // Service de routage pour la redirection

   // Vérification du rôle de l'utilisateur
   const user = authService.getUser(); // Récupère l'utilisateur actuel
   if (user && (user.role === 'Medecin' || user.role === 'Administrateur')) {
      return true; // L'accès est autorisé si l'utilisateur a le rôle "Medecin" ou "Administrateur"
   } else {
      router.navigate(['/login']); // Redirection vers la page de connexion si l'utilisateur n'a pas les bons droits
      return false; // L'accès est refusé
   }
};
