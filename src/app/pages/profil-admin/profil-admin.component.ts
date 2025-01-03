import { Component } from '@angular/core';
import { UpFormComponent } from "../../components/up-form/up-form.component";
import { AddDpiNavBarComponent } from '../../components/add-dpi-nav-bar/add-dpi-nav-bar.component';
import { ProfilStaffComponent } from '../../components/profil-staff/profil-staff.component';

/**
 * Composant représentant la page de profil pour un administrateur.
 * Ce composant inclut un formulaire de mise à jour, une barre de navigation pour l'ajout de DPI,
 * et un composant pour afficher les informations du profil du personnel.
 */
@Component({
  selector: 'app-profil-admin', // Sélecteur du composant
  imports: [AddDpiNavBarComponent, UpFormComponent, ProfilStaffComponent], // Composants à importer pour être utilisés dans ce composant
  standalone: true, // Indique que ce composant est autonome et ne dépend pas d'un module Angular
  templateUrl: './profil-admin.component.html', // Template HTML pour le composant
  styleUrl: './profil-admin.component.css' // Feuille de style CSS pour le composant
})
export class ProfilAdminComponent {
  // Pas de logique métier dans ce composant, il est responsable de l'affichage
}
