import { OrdonnanceService } from '../../services/ordonnance.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsultationService } from '../../services/consultation.service';

/**
 * Composant pour l'ajout d'une ordonnance.
 * Ce composant gère l'ajout de médicaments, l'enregistrement des ordonnances et des consultations,
 * ainsi que la gestion de la visibilité du pop-out.
 */
@Component({
  selector: 'app-add-ordonnance',  // Sélecteur du composant
  standalone: true,  // Indique que ce composant est autonome
  imports: [CommonModule, FormsModule],  // Modules importés nécessaires pour le fonctionnement du composant
  templateUrl: './add-ordonnance.component.html',  // Template HTML du composant
  styleUrls: ['./add-ordonnance.component.css'],  // Fichier CSS du composant
})
export class AddOrdonnanceComponent {
  /**
   * Indique si le pop-out est visible ou non.
   * Utilisé pour afficher ou masquer le pop-out dans l'interface utilisateur.
   * @default false
   */
  @Input() popOutVisible = false;

  /**
   * Données reçues du premier pop-out.
   * Ces données sont utilisées pour initialiser l'état du second pop-out ou pour remplir les champs du formulaire.
   * @type {any}
   */
  @Input() initialordonnanceData: any;

  /**
   * Émet un événement pour changer la visibilité du pop-out.
   * Cet événement est émis lorsqu'une action utilisateur (comme un clic) modifie l'état du pop-out.
   * @type {EventEmitter<boolean>}
   * @example
   * this.popOutVisibilityChange.emit(true); // Pour rendre visible le pop-out
   */
  @Output() popOutVisibilityChange = new EventEmitter<boolean>();

 /**
   * Liste des médicaments avec des informations sur le médicament, la dose et la durée.
   * Chaque élément de la liste contient trois propriétés : `medicament`, `dose` et `duree`.
   * @type {Array<{ medicament: string, dose: string, duree: string }>}
   */
  // Liste des médicaments avec des champs 'medicament', 'dose' et 'duree'
  medications = [{ medicament: '', dose: '', duree: '' }];
 /**
   * Constructeur du composant.
   * @param ordonnanceService Service responsable de la gestion des ordonnances.
   * @param consultationService Service responsable des consultations.
   */
  constructor(private ordonnanceService: OrdonnanceService, private consultationService: ConsultationService) {}

  /**
   * Méthode pour ajouter un nouveau médicament à la liste des médicaments.
   */
  onAddMedicament() {
    this.medications.push({ medicament: '', dose: '', duree: '' });  // Ajoute un objet vide pour un nouveau médicament
  }

  /**
   * Méthode pour sauvegarder l'ordonnance et la consultation.
   * Les données sont envoyées aux services `OrdonnanceService` et `ConsultationService`.
   */
  onSave() {
    // Sauvegarde de la consultation
    this.consultationService.saveConsultation(this.initialordonnanceData).subscribe(
      (response) => {
        console.log('Données sauvegardées avec succès pour la consultation:', response);
      },
      (error) => {
        console.error('Erreur lors de la sauvegarde de la consultation:', error);
      }
    );

    // Combine les données de la consultation et des médicaments pour sauvegarder l'ordonnance
    const combinedData = {
      consultationDate: this.initialordonnanceData.dateTime,
      nss: this.initialordonnanceData.dpi,
      medications: this.medications,
    };

    console.log('Données combinées à sauvegarder:', combinedData);
    
    // Ferme le pop-out et émet un événement pour changer sa visibilité
    this.popOutVisible = false;
    this.popOutVisibilityChange.emit(this.popOutVisible);

    // Sauvegarde de l'ordonnance
    this.ordonnanceService.saveOrdonnance(combinedData).subscribe(
      (response) => {
        console.log('Données sauvegardées avec succès pour l\'ordonnance:', response);
      },
      (error) => {
        console.error('Erreur lors de la sauvegarde de l\'ordonnance:', error);
      }
    );
    this.resetForm();
  }

  /**
   * Méthode pour réinitialiser le formulaire, en supprimant tous les médicaments de la liste.
   */
  resetForm() {
    this.medications = [];  // Vide la liste des médicaments
  }

  /**
   * Méthode pour annuler l'opération en fermant le pop-out.
   */
  onCancel() {
    this.popOutVisible = false;  // Ferme le pop-out
    this.popOutVisibilityChange.emit(this.popOutVisible);  // Émet un événement pour mettre à jour la visibilité
  }
}
