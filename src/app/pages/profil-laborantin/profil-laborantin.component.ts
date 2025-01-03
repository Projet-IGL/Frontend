import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilStaffComponent } from '../../components/profil-staff/profil-staff.component';
import { AuthService } from '../../services/auth.service';

/**
 * Composant représentant la page de profil pour un laborantin.
 * Ce composant permet au laborantin de gérer son profil, se déconnecter ou accéder à la page pour ajouter un bilan biologique.
 */
@Component({
  selector: 'app-profil-laborantin', // Sélecteur du composant
  imports: [ProfilStaffComponent], // Composant ProfilStaff à utiliser dans ce composant
  templateUrl: './profil-laborantin.component.html', // Template HTML pour ce composant
  styleUrl: './profil-laborantin.component.css' // Feuille de style CSS pour ce composant
})
export class ProfilLaborantinComponent {
  
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
   * Méthode pour rediriger l'utilisateur vers la page d'ajout de bilan biologique.
   * Cette méthode est utilisée lorsqu'un laborantin souhaite ajouter un bilan biologique.
   */
  ouvrirBilan() {
    this.router.navigate(['/ajouterBilanBio']); // Redirection vers la page d'ajout de bilan biologique
  }
}
