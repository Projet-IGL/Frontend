import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ProfilStaffComponent} from '../../components/profil-staff/profil-staff.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profil-laborantin',
  imports: [ProfilStaffComponent],
  templateUrl: './profil-laborantin.component.html',
  styleUrl: './profil-laborantin.component.css'
})
export class ProfilLaborantinComponent {
  // Méthode pour rediriger vers la page de déconnexion
      constructor(private router: Router, private authService: AuthService) {}
  
      logout() {
        this.authService.logout();
        this.router.navigate(['/Landing-page']);
      }
      ouvrirBilan() {
        this.router.navigate(['/ajouterBilanBio']);
      }
}
