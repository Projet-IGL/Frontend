import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // Import du service

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importer les modules nécessaires
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = ''; // Utilisé pour l'email
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  // Méthode pour gérer la connexion
  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Traitement en cas de succès
        const token = response.access; // Jeton d'authentification reçu
        localStorage.setItem('token', token); // Sauvegarde du token
        this.router.navigate(['/profilMedecin']); // Rediriger après connexion
      },
      (error) => {
        // Gestion des erreurs
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
        console.error('Erreur de connexion :', error);
      }
    );
  }
}
