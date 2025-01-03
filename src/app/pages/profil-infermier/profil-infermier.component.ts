import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilStaffComponent } from '../../components/profil-staff/profil-staff.component';
import { AuthService } from '../../services/auth.service';

/**
 * Composant représentant la page de profil pour un infirmier.
 * Ce composant permet à l'infirmier de gérer son profil, se déconnecter ou accéder à la page pour ajouter des soins.
 */
@Component({
  selector: 'app-profil-infermier', // Sélecteur du composant
  imports: [ProfilStaffComponent], // Composant ProfilStaff à utiliser dans ce composant
  templateUrl: './profil-infermier.component.html', // Template HTML pour ce composant
  styleUrl: './profil-infermier.component.css' // Feuille de style CSS pour ce composant
})
export class ProfilInfermierComponent {
  
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
   * et le rediriger vers la page d'accueil.
   */
  logout() {
    this.authService.logout();  // Déconnexion de l'utilisateur
    this.router.navigate(['/Landing-page']); // Redirection vers la page d'accueil
  }

  /**
   * Méthode pour rediriger l'utilisateur vers la page d'ajout de soins.
   * Cette méthode est utilisée lorsqu'un infirmier souhaite ajouter un soin pour un patient.
   */
  ouvrirSoin() {
    this.router.navigate(['/ajouterSoin']); // Redirection vers la page d'ajout de soins
  }
}
