import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

/**
 * Composant de la barre de navigation pour la page des consultations.
 * Ce composant permet de naviguer entre différentes sections liées aux consultations
 * et de gérer l'affichage dynamique des boutons en fonction de la route actuelle.
 */
@Component({
  selector: 'app-consultation-navbar',
  imports: [CommonModule], // Import des modules nécessaires
  templateUrl: './consultation-navbar.component.html', // Template HTML associé au composant
  styleUrls: ['./consultation-navbar.component.css'] // Styles CSS associés au composant
})
export class ConsultationNavbarComponent {
  
  /**
   * Constructeur du composant ConsultationNavbarComponent.
   * @param router - Service utilisé pour la navigation entre les différentes pages
   */
  constructor(private router: Router) {}

  /**
   * Méthode pour obtenir la classe CSS d'un bouton en fonction de la page active.
   * Cette méthode applique une classe "bg-violet" si la page actuelle correspond à la section spécifiée,
   * sinon elle applique "bg-transparent".
   * @param page - Nom de la page pour laquelle on souhaite obtenir la classe CSS (par exemple, 'Medecin', 'Resume', etc.)
   * @returns Une chaîne de caractères représentant la classe CSS à appliquer
   */
  getButtonClass(page: string): string {
    const currentRoute = this.router.url;
    // Si la route actuelle inclut la page spécifiée, applique la classe 'bg-violet'
    return currentRoute.includes(`/Rech-dpi/Consultations/${page}`)
      ? 'bg-violet'
      : 'bg-transparent';  // Sinon applique 'bg-transparent'
  }

  /**
   * Méthode pour rediriger l'utilisateur vers la page "Médecin" dans la section consultations.
   */
  goToMedecinPage() {
    this.router.navigate(['/Rech-dpi/Consultations/Medecin']);  // Redirection vers la page Médecin
  }

  /**
   * Méthode pour rediriger l'utilisateur vers la page "Résumé" dans la section consultations.
   */
  goToResumePage() {
    this.router.navigate(['/Rech-dpi/Consultations/Resume']);  // Redirection vers la page Résumé
  }

  /**
   * Méthode pour rediriger l'utilisateur vers la page "Ordonnance" dans la section consultations.
   */
  goToOrdonnancePage() {
    this.router.navigate(['/Rech-dpi/Consultations/Ordonnance']);  // Redirection vers la page Ordonnance
  }

  /**
   * Méthode pour rediriger l'utilisateur vers la page "Bilan Radiologique" dans la section consultations.
   */
  goToBilanRadioPage() {
    this.router.navigate(['/Rech-dpi/Consultations/Bilan-Radiologique']);  // Redirection vers la page Bilan Radiologique
  }

  /**
   * Méthode pour rediriger l'utilisateur vers la page "Bilan Biologique" dans la section consultations.
   */
  goToBilanBioPage() {
    this.router.navigate(['/Rech-dpi/Consultations/Bilan-Biologique']);  // Redirection vers la page Bilan Biologique
  }

  /**
   * Méthode pour rediriger l'utilisateur vers la page "Compte Rendu" dans la section consultations.
   */
  goToCompteRenduPage() {
    this.router.navigate(['/Rech-dpi/Consultations/Compte-Rendu']);  // Redirection vers la page Compte Rendu
  }

  /**
   * Méthode pour rediriger l'utilisateur vers la page principale des consultations.
   */
  goToConsultationPage() {
    this.router.navigate(['/Rech-dpi/Consultations']);  // Redirection vers la page principale des consultations
  }

  /**
   * État du menu pour savoir s'il est ouvert ou fermé.
   * @default false - Le menu est fermé au départ
   */
  menuOpen: boolean = false; 

  /**
   * Méthode pour basculer l'état du menu (ouvert/fermé).
   * Lorsque l'utilisateur clique sur le bouton du menu, l'état du menu est inversé.
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Inverse l'état du menu
  }
}
