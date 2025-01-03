import { Component, OnInit } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { ConsultationService } from '../../services/consultation.service';

/**
 * Composant représentant la page de résumé d'une consultation.
 * Ce composant affiche les informations résumées d'une consultation.
 */
@Component({
  selector: 'app-resume-page', // Sélecteur du composant
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent], // Dépendances du composant
  templateUrl: './resume-page.component.html', // Template HTML pour ce composant
  styleUrl: './resume-page.component.css' // Feuille de style CSS pour ce composant
})
export class ResumePageComponent implements OnInit {
  
  /**
   * Constructeur du composant. Initialisation avec le service de consultation.
   * 
   * @param {ConsultationService} consultationService - Service permettant d'obtenir les informations sur la consultation.
   */
  constructor(private consultationService: ConsultationService) {}

  /** Variable pour stocker les informations de la consultation. */
  consultation: any;

  /**
   * Méthode d'initialisation du composant.
   * Récupère les données de consultation via le service lors de l'initialisation du composant.
   */
  ngOnInit(): void {
    this.consultation = this.consultationService.getConsultation(); // Récupérer les informations de consultation
  }
}
