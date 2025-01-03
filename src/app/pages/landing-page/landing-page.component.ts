import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Composant représentant la page d'accueil (landing page) de l'application.
 * Ce composant gère la navigation vers la page de connexion.
 */
@Component({
  selector: 'app-landing-page', // Sélecteur du composant
  imports: [], // Importations spécifiques à ce composant
  standalone: true, // Composant autonome, sans module Angular supplémentaire
  templateUrl: './landing-page.component.html', // Template HTML pour le composant
  styleUrl: './landing-page.component.css' // Feuille de style CSS pour le composant
})
export class LandingPageComponent {
  
  /**
   * Le constructeur du composant.
   * @param {Router} router - Le service Router pour la navigation.
   */
  constructor(private router: Router) {}

  /**
   * Méthode pour ouvrir la page de connexion.
   * Cette méthode utilise le service Router pour naviguer vers la page '/login'.
   */
  openLogin() {
    this.router.navigate(['/login']);
  }
}
