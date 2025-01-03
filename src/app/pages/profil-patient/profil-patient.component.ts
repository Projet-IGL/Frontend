import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPatientComponent } from '../../components/info-patient/info-patient.component';
import { AuthService } from '../../services/auth.service';

/**
 * Composant représentant la page de profil pour un patient.
 * Ce composant permet au patient de gérer son profil, se déconnecter ou accéder aux consultations.
 */
@Component({
  selector: 'app-profil-patient', // Sélecteur du composant
  imports: [InfoPatientComponent], // Composant InfoPatient à utiliser dans ce composant
  templateUrl: './profil-patient.component.html', // Template HTML pour ce composant
  styleUrl: './profil-patient.component.css' // Feuille de style CSS pour ce composant
})
export class ProfilPatientComponent {

  /**
   * Constructeur pour initialiser le composant avec les services nécessaires.
   * 
   * @param {Router} router - Service pour la gestion de la navigation entre les pages.
   * @param {AuthService} authService - Service pour la gestion de l'authentification (connexion/déconnexion).
   */
  constructor(private router: Router, private authService: AuthService) {}

  /**
   * Méthode pour déconnecter l'utilisateur et rediriger vers la page d'accueil.
   * Cette méthode utilise le service `authService` pour déconnecter l'utilisateur
   * et le redirige vers la page d'accueil.
   */
  logout() {
    this.authService.logout();  // Déconnexion de l'utilisateur
    this.router.navigate(['/Landing-page']); // Redirection vers la page d'accueil
  }

  /**
   * Méthode pour rediriger l'utilisateur vers la page des consultations.
   * Cette méthode est utilisée lorsque le patient souhaite accéder à ses consultations.
   */
  ouvrirDPI() {
    this.router.navigate(['Rech-dpi/Consultations']); // Redirection vers la page des consultations
  }
}
