// src/app/components/login-form/login-form.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // Import du service AuthService

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import des modules nécessaires
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
    console.log('Nom d\'utilisateur:', this.username);  // Affiche le nom d'utilisateur saisi
    console.log('Mot de passe:', this.password);         // Affiche le mot de passe saisi
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Traitement en cas de succès
        const token = response.access; // Le jeton d'authentification reçu
        this.authService.saveToken(token); // Sauvegarde du jeton dans un cookie
        console.log('Jeton d\'authentification:', token);
        this.router.navigate(['/Rech-dpi']); // Redirection après la connexion réussie
      },
      (error) => {
        // Gestion des erreurs
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
        console.error('Erreur de connexion :', error);
      }
    );
  }
}
