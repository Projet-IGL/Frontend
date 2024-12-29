import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ProfilStaffComponent} from '../../components/profil-staff/profil-staff.component';

@Component({
  selector: 'app-profil-medecin',
  imports: [ProfilStaffComponent],
  templateUrl: './profil-medecin.component.html',
  styleUrl: './profil-medecin.component.css'
})
export class ProfilMedecinComponent {
// Méthode pour rediriger vers la page de déconnexion
constructor(private router: Router) {}

logout() {
  this.router.navigate(['/Landing-page']);
}
ouvrirDPIs() {
  this.router.navigate(['/Rech-dpi']);
}
}
