import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../../services/auth.service';  // Importer AuthService

/**
 * Composant de la barre de navigation pour l'ajout du DPI.
 * Ce composant gère la navigation entre les différentes pages et ajuste l'apparence des boutons
 * en fonction de la route actuelle et du rôle de l'utilisateur connecté.
 */
@Component({
  selector: 'app-add-dpi-nav-bar',  // Sélecteur du composant
  imports: [CommonModule],  // Import des modules nécessaires
  standalone: true,  // Indique que ce composant est autonome
  templateUrl: './add-dpi-nav-bar.component.html',  // Template HTML du composant
  styleUrls: ['./add-dpi-nav-bar.component.css']  // Fichier CSS du composant
})
export class AddDpiNavBarComponent implements OnInit {
  /**
   * Informations de l'utilisateur connecté.
   */
  user: any;

  /**
   * Constructeur du composant.
   * @param router - Service Angular pour gérer la navigation.
   * @param authService - Service d'authentification pour gérer l'utilisateur.
   */
  constructor(private router: Router, private authService: AuthService) {}

  /**
   * Méthode appelée à l'initialisation du composant.
   * Récupère les informations de l'utilisateur via le service `AuthService`.
   */
  ngOnInit(): void {
    this.user = this.authService.getUser();  // Récupération des données utilisateur
    if (this.user) {
      console.log('Utilisateur connecté :', this.user);  // Affiche les données utilisateur pour debug
    }
  }

  /**
   * Retourne les classes CSS du bouton en fonction du type de bouton et de la route actuelle.
   * @param buttonType - Type de bouton (par exemple, 'dpi', 'Profil', 'Rech').
   * @returns Classes CSS à appliquer au bouton.
   */
  getButtonClasses(buttonType: string): string {
    const currentRoute = this.router.url;
    return buttonType === 'dpi' && currentRoute === '/add-dpi'
      ? 'bg-veryLightBlue'
      : 'bg-transparent';
  }

  /**
   * Retourne les classes CSS pour le bouton du profil.
   * @param buttonType - Type de bouton (par exemple, 'Profil').
   * @returns Classes CSS basées sur la route actuelle.
   */
  getButtonCaseProfil(buttonType: string): string {
    const currentRoute = this.router.url;
    return buttonType === 'Profil' && currentRoute === '/profilAdmin'
      ? 'bg-veryLightBlue'
      : 'bg-transparent';
  }

  /**
   * Retourne les classes CSS pour le bouton de recherche de DPI.
   * @param buttonType - Type de bouton (par exemple, 'Rech').
   * @returns Classes CSS basées sur la route actuelle.
   */
  getButtonCaseRech(buttonType: string): string {
    const currentRoute = this.router.url;
    return buttonType === 'Rech' && currentRoute === '/Rech-dpi'
      ? 'bg-veryLightBlue'
      : 'bg-transparent';
  }

  /**
   * Déconnecte l'utilisateur et le redirige vers la page d'accueil.
   */
  goToLandingPage(): void {
    this.authService.logout();  // Déconnexion via AuthService
    this.router.navigate(['/Landing-page']);  // Redirection vers la page d'accueil
  }

  /**
   * Redirige l'utilisateur vers la page d'ajout de DPI.
   */
  goToAddDpiPage(): void {
    this.router.navigate(['/add-dpi']);  // Navigation vers la page "Ajout DPI"
  }

  /**
   * Redirige l'utilisateur vers la page du profil administrateur.
   */
  goToProfilAdmin(): void {
    this.router.navigate(['/profilAdmin']);  // Navigation vers le profil administrateur
  }

  /**
   * Redirige l'utilisateur vers la page de recherche de DPI.
   */
  goToRechDpiPage(): void {
    this.router.navigate(['/Rech-dpi']);  // Navigation vers la recherche de DPI
  }

  /**
   * Redirige l'utilisateur vers son profil, en fonction de son rôle.
   * Si l'utilisateur est un médecin, il est redirigé vers son profil médecin.
   * Sinon, il est redirigé vers le profil administrateur.
   */
  goToProfilPage(): void {
    if (this.user?.role === 'Medecin') {
      this.router.navigate(['/profilMedecin']);  // Profil médecin
    } else {
      this.router.navigate(['/profilAdmin']);  // Profil administrateur
    }
  }
}
