import { Component } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { BilanBioService } from '../../services/bilan-bio.service';
import { ConsultationService } from '../../services/consultation.service';
import { CommonModule } from '@angular/common';
import { MonBilanBioComponent } from '../../components/mon-bilan-bio/mon-bilan-bio.component';

/**
 * Composant pour afficher la page de bilan biologique.
 */
@Component({
  selector: 'app-bilan-bio-page',
  imports: [
    EmptyNavbarComponent, // Composant pour afficher une barre de navigation vide.
    ConsultationNavbarComponent, // Composant pour afficher la barre de navigation des consultations.
    MonBilanBioComponent, // Composant pour afficher les détails du bilan biologique.
    CommonModule // Module Angular contenant des directives communes.
  ],
  templateUrl: './bilan-bio-page.component.html', // Template HTML du composant.
  styleUrl: './bilan-bio-page.component.css' // Feuille de styles CSS du composant.
})
export class BilanBioPageComponent {
  
}

