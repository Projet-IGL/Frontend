import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // Service d'authentification

/**
 * Composant pour une barre de navigation vide.
 * Ce composant gère la logique de navigation pour les utilisateurs connectés,
 * en particulier les médecins, et fournit une fonctionnalité de déconnexion.
 */
@Component({
  selector: 'app-empty-navbar',
  imports: [CommonModule], // Import des modules nécessaires
  templateUrl: './empty-navbar.component.html', // Template HTML associé au composant
  styleUrls: ['./empty-navbar.component.css'] // Styles CSS associés au composant
})
export class EmptyNavbarComponent implements OnInit {
  /**
   * Indique si l'utilisateur actuel est un médecin.
   */
  isMedecin: boolean = false;

  /**
   * Constructeur du composant EmptyNavbarComponent.
   * @param router - Service utilisé pour la navigation entre les pages
   * @param authService - Service utilisé pour gérer l'authentification et récupérer l'utilisateur connecté
   */
  constructor(private router: Router, private authService: AuthService) {}

  /**
   * Méthode appelée lors de l'initialisation du composant.
   * Elle vérifie si l'utilisateur connecté est un médecin et met à jour la propriété `isMedecin`.
   */
  ngOnInit(): void {
    const user = this.authService.getUser(); // Récupère l'utilisateur connecté
    if (user && user.role === 'Medecin') {
      this.isMedecin = true; // Si l'utilisateur est médecin, on met à jour la variable
    }
  }

  /**
   * Déconnecte l'utilisateur et le redirige vers la page d'accueil.
   */
  goToLandingPage(): void {
    this.authService.logout(); // Déconnexion de l'utilisateur
    this.router.navigate(['/Landing-page']); // Redirection vers la page d'accueil
  }

  /**
   * Redirige l'utilisateur vers la page de recherche.
   */
  goToRecherchePage(): void {
    this.router.navigate(['/Rech-dpi']); // Redirection vers la page de recherche
  }
}
