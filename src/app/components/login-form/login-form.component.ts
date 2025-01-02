import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient.service';
import { RechercheService } from '../../services/recherche.service';

/**
 * Composant de formulaire de connexion.
 * Permet à l'utilisateur de se connecter en fournissant un nom d'utilisateur et un mot de passe.
 * Selon le rôle de l'utilisateur, il sera redirigé vers son profil approprié.
 */
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import des modules nécessaires
  templateUrl: './login-form.component.html', // Template HTML associé au composant
  styleUrls: ['./login-form.component.css'] // Styles CSS associés au composant
})
export class LoginFormComponent {
  /**
   * Le nom d'utilisateur .
   * Récupéré depuis le form.
   * Ce champs doit être unique.
   */
  username: string = ''; // Nom d'utilisateur saisi
  /**
   *Le mot de passe.
   Récupéré depuis le form. 
   */
  password: string = ''; // Mot de passe saisi
  /**
   * Le message d'erreur.
   */
  errorMessage: string = ''; // Message d'erreur en cas d'échec de connexion

  /**
   * Constructeur du composant LoginFormComponent
   * @param router - Service utilisé pour la navigation entre les différentes pages
   * @param authService - Service utilisé pour gérer l'authentification
   * @param patientService - Service utilisé pour gérer les données du patient
   * @param rechercheService - Service utilisé pour les opérations de recherche
   */
  constructor(
    private router: Router,
    private authService: AuthService,
    private patientService: PatientService,
    private rechercheService: RechercheService
  ) {}

  /**
   * Méthode de connexion qui appelle le service d'authentification et redirige l'utilisateur selon son rôle.
   * Si la connexion réussit, l'utilisateur est redirigé vers la page appropriée.
   * Si la connexion échoue, un message d'erreur est affiché.
   */
  login() {
    this.authService.login(this.username, this.password).subscribe(
      (user) => {
        // Redirection selon le rôle de l'utilisateur
        switch (user.role) {
          case 'Administrateur':
            this.router.navigate(['/profilAdmin']);
            break;
          case 'Medecin':
            this.router.navigate(['/profilMedecin']);
            break;
          case 'Infirmier':
            this.router.navigate(['/profilInfermier']);
            break;
          case 'Patient':
            this.patientService.setPatient(user);
            console.log('user', user);
            this.router.navigate(['/profilPatient']);  // Redirection vers profil patient
            console.log(this.patientService.getPatient());
            break;
          case 'Laborantin':
            this.router.navigate(['/profilLaborantin']);  // Redirection vers profil laborantin
            break;
          case 'Radiologue':
            this.router.navigate(['/profilRadiologue']);  // Redirection vers profil radiologue
            break;
          default:
            this.errorMessage = 'Rôle inconnu';
            console.error('Rôle non reconnu:', user.role);
            break;
        }
      },
      (error) => {
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
        console.error('Erreur de connexion :', error);
      }
    );
  }
}
