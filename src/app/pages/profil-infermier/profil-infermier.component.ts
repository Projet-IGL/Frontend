import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ProfilStaffComponent} from '../../components/profil-staff/profil-staff.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profil-infermier',
  imports: [ProfilStaffComponent],
  templateUrl: './profil-infermier.component.html',
  styleUrl: './profil-infermier.component.css'
})
export class ProfilInfermierComponent {
  
    // Méthode pour rediriger vers la page de déconnexion
    constructor(private router: Router, private authService: AuthService) {}

    logout() {
      this.authService.logout();
      this.router.navigate(['/Landing-page']);
    }
    ouvrirSoin() {
      this.router.navigate(['/ajouterSoin']);
    }


  
       
}
