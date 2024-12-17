import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importer les modules nécessaires
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  mockUsers = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'infirmier', password: 'infirmier123', role: 'infirmier' },
    { username: 'medecin', password: 'medecin123', role: 'medecin' },
    { username: 'patient', password: 'patient123', role: 'patient' },
    { username: 'radiologue', password: 'radiologue123', role: 'radiologue' },
    { username: 'laborantin', password: 'laborantin123', role: 'laborantin' },
  ];

  constructor(private router: Router) {}

  login() {
    const user = this.mockUsers.find(
      u => u.username === this.username && u.password === this.password
    );

    if (user) {
      switch (user.role) {
        case 'admin':
          this.router.navigate(['/add-dpi']);
          break;
        case 'infirmier':
          this.router.navigate(['/profilInfermier']);
          break;
        case 'medecin':
          this.router.navigate(['/profilMedecin']);
          break;
        case 'patient':
          this.router.navigate(['/profilPatient']);
          break;
        case 'radiologue':
          this.router.navigate(['/radiologue-page']);
          break;
        case 'laborantin':
          this.router.navigate(['/laborantin-page']);
          break;
        default:
          this.errorMessage = 'Rôle inconnu.';
      }
    } else {
      this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
  }
}
