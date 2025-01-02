import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrdonnanceService } from '../../services/ordonnance.service';
import { ConsultationService } from '../../services/consultation.service';

/**
 * Composant pour l'ajout d'un bilan médical.
 * Ce composant permet de gérer les données associées à un bilan médical, 
 * avec la possibilité de les sauvegarder ou d'annuler l'action.
 */
@Component({
  selector: 'app-add-bilan',  // Sélecteur du composant
  imports: [CommonModule],  // Import des modules nécessaires
  templateUrl: './add-bilan.component.html',  // Chemin du fichier HTML associé
  styleUrl: './add-bilan.component.css'  // Chemin du fichier CSS associé
})
export class AddBilanComponent {
  /**
   * Détermine la visibilité de la fenêtre pop-out.
   * Par défaut, elle est masquée.
   */
  @Input() popOutVisible = false;

  /**
   * Données initiales reçues pour l'ordonnance.
   * Ces données peuvent être pré-remplies pour édition ou sauvegarde.
   */
  @Input() initialordonnanceData: any;

  /**
   * Événement émis pour signaler les changements de visibilité du pop-out.
   */
  @Output() popOutVisibilityChange = new EventEmitter<boolean>();

  /**
   * Constructeur pour injecter les services nécessaires.
   * @param ordonnanceService - Service pour gérer les ordonnances.
   * @param consultationService - Service pour gérer les consultations.
   */
  constructor(
    private ordonnanceService: OrdonnanceService,
    private consultationService: ConsultationService
  ) {}

  /**
   * Sauvegarde les données du bilan médical.
   * Cette méthode appelle le service de consultation pour enregistrer les données 
   * et ferme la fenêtre pop-out après l'opération.
   */
  onSave(): void {
    // Appel au service de consultation pour sauvegarder les données
    this.consultationService.saveConsultation(this.initialordonnanceData).subscribe(
      (response) => {
        console.log('Données sauvegardées avec succès:', response);
      },
      (error) => {
        console.error('Erreur lors de la sauvegarde des données:', error);
      }
    );

    // Fermeture de la fenêtre pop-out
    this.popOutVisible = false;
    console.log('Fenêtre pop-out fermée:', this.popOutVisible);
    this.popOutVisibilityChange.emit(this.popOutVisible);
  }

  /**
   * Annule l'opération en cours.
   * Ferme la fenêtre pop-out sans enregistrer les données.
   */
  onCancel(): void {
    this.popOutVisible = false;  // Met à jour la visibilité
    console.log('Action annulée. Fenêtre pop-out fermée:', this.popOutVisible);
    this.popOutVisibilityChange.emit(this.popOutVisible);  // Émet l'événement de fermeture
  }
}
