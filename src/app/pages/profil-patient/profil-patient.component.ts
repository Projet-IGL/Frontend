import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {InfoPatientComponent} from '../../components/info-patient/info-patient.component';


@Component({
  selector: 'app-profil-patient',
  imports: [InfoPatientComponent],
  templateUrl: './profil-patient.component.html',
  styleUrl: './profil-patient.component.css'
})
export class ProfilPatientComponent {
  // Méthode pour rediriger vers la page de déconnexion
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/Landing-page']);
  }
  ouvrirDPI() {
    this.router.navigate(['Rech-dpi/Consultations']);
  }

}
