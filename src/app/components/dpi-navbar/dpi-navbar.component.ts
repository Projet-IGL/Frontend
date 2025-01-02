import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // Service d'authentification

/**
 * Composant de la barre de navigation DPI (Dossier Patient Informatisé).
 * Ce composant permet de naviguer entre les différentes sections du dossier patient
 * en fonction du rôle de l'utilisateur, tout en offrant des styles dynamiques pour les boutons.
 */
@Component({
  selector: 'app-dpi-navbar',
  imports: [CommonModule], // Import des modules nécessaires
  templateUrl: './dpi-navbar.component.html', // Template HTML associé au composant
  styleUrls: ['./dpi-navbar.component.css'] // Styles CSS associés au composant
})
export class DpiNavbarComponent implements OnInit {
  /**
   * Indique si l'utilisateur actuel est un médecin.
   */
  isMedecin: boolean = false;

  /**
   * État d'ouverture ou de fermeture du menu.
   */
  menuOpen: boolean = false;

  /**
   * Constructeur du composant DpiNavbarComponent.
   * @param router - Service utilisé pour naviguer entre les différentes pages
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
      this.isMedecin = true; // Si l'utilisateur est médecin, permet certaines actions spécifiques
    }
  }

  /**
   * Obtient les classes CSS du bouton "Soin" en fonction de la route courante.
   * @param buttonType - Type de bouton (par exemple, 'Soin', 'Consultation', 'Patient')
   * @returns Une chaîne contenant les classes CSS adaptées
   */
  getButtonClassesSoin(buttonType: string): string {
    const currentRoute = this.router.url;
    return buttonType === 'Soin' && currentRoute === '/Rech-dpi/Soins'
      ? 'bg-violet'
      : 'bg-transparent';
  }

  /**
   * Obtient les classes CSS du bouton "Consultation" en fonction de la route courante.
   * @param buttonType - Type de bouton (par exemple, 'Consultation')
   * @returns Une chaîne contenant les classes CSS adaptées
   */
  getButtonCaseConsult(buttonType: string): string {
    const currentRoute = this.router.url;
    return buttonType === 'Consultation' && currentRoute === '/Rech-dpi/Consultations'
      ? 'bg-violet'
      : 'bg-transparent';
  }

  /**
   * Obtient les classes CSS du bouton "Patient" en fonction de la route courante.
   * @param buttonType - Type de bouton (par exemple, 'Patient')
   * @returns Une chaîne contenant les classes CSS adaptées
   */
  getButtonCasePatient(buttonType: string): string {
    const currentRoute = this.router.url;
    return buttonType === 'Patient' && currentRoute === '/Rech-dpi/Patient'
      ? 'bg-violet'
      : 'bg-transparent';
  }

  /**
   * Redirige l'utilisateur vers la page des patients.
   */
  goToPatientPage(): void {
    this.router.navigate(['/Rech-dpi/Patient']); // Redirection vers la page des patients
  }

  /**
   * Redirige l'utilisateur vers la page des consultations.
   */
  goToConsultationPage(): void {
    this.router.navigate(['/Rech-dpi/Consultations']); // Redirection vers la page des consultations
  }

  /**
   * Redirige l'utilisateur vers la page des soins.
   */
  goToSoinPage(): void {
    this.router.navigate(['/Rech-dpi/Soins']); // Redirection vers la page des soins
  }

  /**
   * Basculer l'état du menu (ouvert/fermé).
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Inverse l'état actuel du menu
  }
}
