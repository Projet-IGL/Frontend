import { Component, OnInit } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { ConsultationService } from '../../services/consultation.service';

/**
 * Composant pour afficher la page de consultation du médecin.
 */
@Component({
  selector: 'app-consultation-medecin-page',
  imports: [
    EmptyNavbarComponent, // Composant pour afficher une barre de navigation vide.
    ConsultationNavbarComponent // Composant pour afficher la barre de navigation des consultations.
  ],
  templateUrl: './consultation-medecin-page.component.html', // Template HTML pour le composant.
  styleUrl: './consultation-medecin-page.component.css' // Feuille de style CSS pour le composant.
})
export class ConsultationMedecinPageComponent implements OnInit {
  /** L'objet consultation qui contient les informations sur la consultation en cours. */
  consultation: any;

  /**
   * Constructeur du composant.
   * @param consultationService Service pour gérer les informations de consultation.
   */
  constructor(private consultationService: ConsultationService) {}

  /**
   * Méthode d'initialisation du composant.
   * Récupère la consultation en cours à partir du service `ConsultationService`.
   */
  ngOnInit(): void {
    // Récupère la consultation en cours
    this.consultation = this.consultationService.getConsultation();
    
    // Affiche la consultation dans la console pour vérification
    console.log(this.consultation);
  }
}
