import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';  // Assurez-vous d'importer votre service d'authentification

@Component({
  selector: 'app-dpi-navbar',
  imports: [CommonModule],
  templateUrl: './dpi-navbar.component.html',
  styleUrl: './dpi-navbar.component.css'
})
export class DpiNavbarComponent implements OnInit {
  isMedecin: boolean = false;  // Variable pour déterminer si l'utilisateur est un médecin
  menuOpen: boolean = false;    // État du menu

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getUser();  // Récupère l'utilisateur connecté
    if (user && user.role === 'Medecin') {
      this.isMedecin = true;  // Si l'utilisateur est médecin, affichez le bouton "Patient"
    }
  }

  getButtonClassesSoin(buttonType: string): string {
    const currentRoute = this.router.url;

    if (buttonType === 'Soin') {
      return currentRoute === '/Rech-dpi/Soins'
        ? 'bg-violet'
        : 'bg-transparent';
    } else {
      return currentRoute === '/Rech-dpi/Consultations'
        ? 'bg-white'
        : 'bg-transparent';
    }
  }

  getButtonCaseConsult(buttonType: string): string {
    const currentRoute = this.router.url;

    if (buttonType === 'Consultation') {
      return currentRoute === '/Rech-dpi/Consultations'
        ? 'bg-violet'
        : 'bg-transparent';
    } else {
      return currentRoute === '/Rech-dpi/Soins'
        ? 'bg-white'
        : 'bg-transparent';
    }
  }

  getButtonCasePatient(buttonType: string): string {
    const currentRoute = this.router.url;

    if (buttonType === 'Patient') {
      return currentRoute === '/Rech-dpi/Patient'
        ? 'bg-violet'
        : 'bg-transparent';
    } else {
      return currentRoute === '/Rech-dpi/Soins'
        ? 'bg-white'
        : 'bg-transparent';
    }
  }

  goToPatientPage() {
    this.router.navigate(['/Rech-dpi/Patient']);
  }

  goToConsultationPage() {
    this.router.navigate(['/Rech-dpi/Consultations']);
  }

  goToSoinPage() {
    this.router.navigate(['/Rech-dpi/Soins']);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;  // Inverse l'état du menu
  }
}
