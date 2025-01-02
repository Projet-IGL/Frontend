import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * Composant représentant le profil du membre du personnel.
 * Ce composant permet d'afficher les informations de profil de l'utilisateur connecté (staff).
 */
@Component({
  selector: 'app-profil-staff', // Le sélecteur pour utiliser ce composant dans un template
  standalone: true, // Ce composant est autonome et n'a pas besoin d'être déclaré dans un module Angular
  imports: [CommonModule, FormsModule], // Modules nécessaires pour ce composant
  templateUrl: './profil-staff.component.html', // Chemin vers le fichier de template HTML
  styleUrls: ['./profil-staff.component.css'] // Chemin vers le fichier de styles CSS
})
export class ProfilStaffComponent implements OnInit {
  /**
   *  @type {user}
   * Représente les informations du personnel connecté.
   */
  user: any = null; // Variable pour stocker les informations de l'utilisateur

  /**
   * Constructeur du composant ProfilStaffComponent.
   * @param authService - Service pour gérer l'authentification et récupérer les informations de l'utilisateur.
   */
  constructor(private authService: AuthService) {}

  /**
   * Méthode appelée lors de l'initialisation du composant.
   * Récupère les informations de l'utilisateur connecté via le service AuthService.
   */
  ngOnInit() {
    this.user = this.authService.getUser(); // Récupère les informations de l'utilisateur connecté
  }
}
