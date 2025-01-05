import { AuthService } from './../../services/auth.service';
import { PatientService } from './../../services/patient.service';
import { ConsultationService } from './../../services/consultation.service';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Composant pour ajouter une consultation.
 * Ce composant permet à l'utilisateur de saisir les informations relatives à une consultation,
 * de sélectionner une action à entreprendre (ordonnance, bilan, aucun),
 * et de valider ou annuler l'ajout de la consultation.
 */
@Component({
  selector: 'app-ajouter-consultation', // Sélecteur du composant
  templateUrl: './ajouter-consultation.component.html', // Template HTML du composant
  styleUrls: ['./ajouter-consultation.component.css'], // Fichier CSS du composant
  imports: [CommonModule] // Import de CommonModule pour permettre l'utilisation de directives comme ngIf, ngFor
})
export class AjouterConsultationComponent {
  
  /**
   * Contrôle de la visibilité de la pop-up (entrée du composant).
   * Utilisé pour afficher ou masquer la pop-up dans l'interface utilisateur.
   * @default false
   */
  @Input() popOutVisible = false;

  /**
   * Émet un événement pour changer la visibilité de la pop-up.
   * Cet événement est émis lorsqu'un changement de visibilité doit être appliqué (par exemple, lors de l'ouverture ou de la fermeture).
   * @type {EventEmitter<boolean>}
   * @example
   * this.popOutVisibilityChange.emit(true); // Pour rendre visible la pop-up
   */
  @Output() popOutVisibilityChange = new EventEmitter<boolean>();

  /**
   * Émet un événement pour ouvrir une autre pop-up.
   * Cet événement est émis lorsqu'une action requiert l'ouverture d'une pop-up différente de celle actuellement visible.
   * @type {EventEmitter<any>}
   */
  @Output() openOtherPopout = new EventEmitter<any>();

  /**
   * L'action sélectionnée pour la consultation.
   * Permet de spécifier l'action que l'utilisateur souhaite effectuer (par exemple, une ordonnance, un bilan, ou aucune action).
   * @type {string}
   * @default ''
   */
  action: string = '';

  /**
   * Données de la consultation à sauvegarder.
   * Ces données incluent des informations essentielles telles que la date et l'heure de la consultation, le résumé, les bilans, le DPI et le médecin consultant.
   * @example { dateTime: '2025-01-02T14:00:00', resume: 'Consultation de suivi', bilan: 'aucun', dpi: '123456', medecinConsultant: '12' }
   */
  consultationData = { dateTime: '', resume: '', bilan: '', dpi: '', medecinConsultant: '' };

  /**
   * Objet pour stocker les informations du patient.
   * Ce champ contient toutes les données pertinentes concernant un patient pour cette consultation.
   * @type {any}
   */
  patient: any;

  /**
   * Identifiant du médecin responsable de la consultation.
   * Permet d'associer la consultation à un médecin spécifique via son identifiant.
   * @type {any}
   */
  medecinId: any;

  /**
   * Constructeur du composant AjouterConsultationComponent.
   * @param ConsultationService - Service pour gérer les consultations
   * @param PatientService - Service pour gérer les informations du patient
   * @param AuthService - Service pour gérer l'authentification et récupérer les informations de l'utilisateur connecté
   */
  constructor(private ConsultationService: ConsultationService, private PatientService: PatientService, private AuthService: AuthService) {}

  /**
   * Méthode pour fermer la pop-up.
   * Elle émet un événement pour mettre à jour la visibilité de la pop-up.
   */
  closePopup(): void {
    this.popOutVisible = false;
    this.popOutVisibilityChange.emit(this.popOutVisible);
  }

  /**
   * Méthode pour gérer la sélection de l'action (ordonnance, bilan, aucun).
   * @param selectedAction - Action sélectionnée par l'utilisateur.
   */
  selectAction(selectedAction: string): void {
    this.action = selectedAction;  // Met à jour l'action sélectionnée
  }

  /**
   * Méthode pour annuler l'opération et fermer la pop-up.
   * Affiche également un message dans la console indiquant que le formulaire a été annulé.
   */
  annuler(): void {
    this.closePopup();
    console.log('Formulaire annulé.');
  }

  /**
   * Méthode pour passer à l'étape suivante après avoir validé la saisie des données.
   * Cette méthode vérifie la validité des données saisies avant de procéder.
   * @param datetime - Date et heure de la consultation
   * @param resume - Résumé de la consultation
   */
  suivant(datetime: string, resume: string): void {
    // Vérification des champs requis
    if (!datetime) {
      alert('Veuillez sélectionner une date et une heure.');
      return;
    }

    if (!resume.trim()) {
      alert('Veuillez entrer un résumé de la consultation.');
      return;
    }

    if (!this.action) {
      alert('Veuillez sélectionner une des options: "Etablir ordonnance", "Demander les bilans", "Aucun".');
      return;
    }

    // Affichage des données dans la console pour débogage
    console.log('Date et Heure:', datetime);
    console.log('Résumé:', resume);
    console.log('Action choisie:', this.action);

    // Fermeture de la pop-up après validation des données
    this.popOutVisible = false;
    this.popOutVisibilityChange.emit(this.popOutVisible);

    // Récupération des informations du patient et de l'utilisateur (médecin)
    console.log(" Patient", this.PatientService.getPatient());
    this.patient = this.PatientService.getPatient();
    this.medecinId = this.AuthService.getUser().data.id;

    // Préparation des données de la consultation à sauvegarder
    this.consultationData = {
      dateTime: datetime,
      resume: resume,
      bilan: this.action,
      dpi: this.patient.patient_data.nss,
      medecinConsultant: this.medecinId
    };

    // Traitement selon l'action sélectionnée
    switch (this.action) {
      case 'ordonnance':
      case 'bilan biologique,bilan radiologique':
      case 'Bilan biologique':
      case 'Bilan radiologique':
        // Ouverture d'une autre pop-up pour l'ordonnance ou le bilan
        this.openOtherPopout.emit({ action: this.action, consultationData: this.consultationData });
        break;

      case 'aucun':
        // Sauvegarde de la consultation sans action (aucune ordonnance ou bilan)
        this.closePopup();
        this.ConsultationService.saveConsultation(this.consultationData).subscribe(
          (response) => {
            console.log('Data saved successfully:', response);
          },
          (error) => {
            console.error('Error saving data:', error);
          }
        );
        break;

      default:
        console.error('Action non reconnue:', this.action);
        break;
    }
  }
}
