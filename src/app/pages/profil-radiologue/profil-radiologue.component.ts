import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ProfilStaffComponent} from '../../components/profil-staff/profil-staff.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profil-radiologue',
  imports: [ProfilStaffComponent],
  templateUrl: './profil-radiologue.component.html',
  styleUrl: './profil-radiologue.component.css'
})
export class ProfilRadiologueComponent {
  // Méthode pour rediriger vers la page de déconnexion
  constructor(private router: Router, private authService: AuthService) {}
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/Landing-page']);
  }
  ouvrirBilan() {
    this.router.navigate(['/ajouterBilanRadio']);
  }
}
