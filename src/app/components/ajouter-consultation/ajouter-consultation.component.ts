import { PatientService } from './../../services/patient.service';
import { ConsultationService } from './../../services/consultation.service';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ajouter-consultation',
  templateUrl: './ajouter-consultation.component.html',
  styleUrls: ['./ajouter-consultation.component.css'],
  imports: [CommonModule] // Ajoutez ici CommonModule
})
export class AjouterConsultationComponent {
  @Input() popOutVisible = false;
  @Output() popOutVisibilityChange = new EventEmitter<boolean>();
  @Output() openOtherPopout = new EventEmitter<any>();
  // Variables pour stocker les états
  
  action: string = ''; // L'action sélectionnée (ordonnance, bilan, aucun)
  consultationData = { dateTime: '', resume: '', bilan: '',dpi:'' }; // To store entered data
  constructor(private ConsultationService:ConsultationService, private PatientService:PatientService) {}
  //patient:any={data:{nss:120}};
  patient:any;
  // Méthode pour fermer la pop-up
  closePopup(): void {
   this.popOutVisible=false
   this.popOutVisibilityChange.emit(this.popOutVisible);

   }

  // Méthode pour gérer la sélection de l'action
  selectAction(selectedAction: string): void {
    this.action = selectedAction;
  }

  // Méthode pour annuler
  annuler(): void {
    this.closePopup();
    console.log('Formulaire annulé.');
  }

  // Méthode pour passer à l'étape suivante
  suivant(datetime: string, resume: string): void {
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

    console.log('Date et Heure:', datetime);
    console.log('Résumé:', resume);
    console.log('Action choisie:', this.action);
    this.popOutVisible=false;
    this.popOutVisibilityChange.emit(this.popOutVisible);
    console.log("hada patient",this.PatientService.getPatient());
    this.patient=this.PatientService.getPatient();
    this.consultationData = { dateTime: datetime, resume: resume, bilan: this.action,dpi:this.patient.patient_data.nss };
    this.ConsultationService.saveConsultation(this.consultationData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
    switch (this.action) {
      case 'ordonnance':
        this.openOtherPopout.emit({ action: this.action, consultationData: this.consultationData });
        break;
      case 'bilan2':
      case 'bilanBio':
      case 'bilanRadio':
        this.openOtherPopout.emit({ action: this.action, consultationData: this.consultationData });
        break;
      case 'aucun':
        this.closePopup();
        break;

      default:
        console.error('Action non reconnue:', this.action);
        break;
    }
  }
}
