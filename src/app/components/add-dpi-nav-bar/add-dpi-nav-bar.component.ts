import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../../services/auth.service';  // Importer AuthService

@Component({
  selector: 'app-add-dpi-nav-bar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './add-dpi-nav-bar.component.html',
  styleUrl: './add-dpi-nav-bar.component.css'
})
export class AddDpiNavBarComponent implements OnInit {
  user: any;  // Déclare la variable 'user' pour stocker les données de l'utilisateur

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();  // Récupère les informations de l'utilisateur

    if (this.user ) {
      console.log('Utilisateur', this.user);
    }
  }

  getButtonClasses(buttonType: string): string {
    const currentRoute = this.router.url;

    if (buttonType === 'dpi') {
      return currentRoute === '/add-dpi'
        ? 'bg-veryLightBlue'
        : 'bg-transparent';
    } else {
      return currentRoute === '/profilAdmin'
        ? 'bg-white'
        : 'bg-transparent';
    }
  }

  getButtonCaseProfil(buttonType: string): string {
    const currentRoute = this.router.url;

    if (buttonType === 'Profil') {
      return currentRoute === '/profilAdmin'
        ? 'bg-veryLightBlue'
        : 'bg-transparent';
    } else {
      return currentRoute === '/add-dpi'
        ? 'bg-white'
        : 'bg-transparent';
    }
  }

  getButtonCaseRech(buttonType: string): string {
    const currentRoute = this.router.url;

    if (buttonType === 'Rech') {
      return currentRoute === '/Rech-dpi'
        ? 'bg-veryLightBlue'
        : 'bg-transparent';
    } else {
      return currentRoute === '/add-dpi'
        ? 'bg-white'
        : 'bg-transparent';
    }
  }

  goToLandingPage() {
    this.authService.logout();  // Appelle la méthode logout du service AuthService
    this.router.navigate(['/Landing-page']);
  }

  goToAddDpiPage() {
    this.router.navigate(['/add-dpi']);
  }

  goToProfilAdmin() {
    this.router.navigate(['/profilAdmin']);
  }

  goToRechDpiPage() {
    this.router.navigate(['/Rech-dpi']);
  }

  goToProfilPage() {
    if (this.user && this.user.role === 'Medecin') {
      // Rediriger vers le profil du médecin
      this.router.navigate(['/profilMedecin']);
    } else {
      // Rediriger vers le profil standard (admin)
      this.router.navigate(['/profilAdmin']);
    }
  }
}
