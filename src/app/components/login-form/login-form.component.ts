import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import des modules nécessaires
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

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
            this.router.navigate(['/profilPatient']);  // Redirection vers profil patient
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
