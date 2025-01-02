import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';  // Assurez-vous d'importer votre service d'authentification

@Component({
  selector: 'app-empty-navbar',
  imports: [CommonModule],
  templateUrl: './empty-navbar.component.html',
  styleUrls: ['./empty-navbar.component.css']
})
export class EmptyNavbarComponent implements OnInit {
  isMedecin: boolean = false;  // Variable pour savoir si l'utilisateur est un médecin

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getUser();  // Récupère l'utilisateur connecté
    if (user && user.role === 'Medecin') {
      this.isMedecin = true;  // Si l'utilisateur est médecin, on permet l'accès à la recherche
    }
  }

  goToLandingPage() {
    this.authService.logout();
    this.router.navigate(['/Landing-page']);
  }

  goToRecherchePage() {
    this.router.navigate(['/Rech-dpi']);
  }
}
