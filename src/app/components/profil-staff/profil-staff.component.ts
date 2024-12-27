import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil-staff',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import des modules nécessaires
  templateUrl: './profil-staff.component.html',
  styleUrls: ['./profil-staff.component.css']
})
export class ProfilStaffComponent implements OnInit {
  user: any = null; // Informations utilisateur

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUser(); // Récupère les informations de l'utilisateur
  }
}
