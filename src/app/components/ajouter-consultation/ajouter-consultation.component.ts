import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ajouter-consultation',
  templateUrl: './ajouter-consultation.component.html',
  styleUrls: ['./ajouter-consultation.component.css'],
  imports: [CommonModule] // Ajoutez ici CommonModule
})
export class AjouterConsultationComponent {
  // Variables pour stocker les états
  isPopupVisible: boolean = true; // La pop-up est visible par défaut
  action: string = ''; // L'action sélectionnée (ordonnance, bilan, aucun)

  constructor() {}

  // Méthode pour fermer la pop-up
  closePopup(): void {
    this.isPopupVisible = false;
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
      alert('Veuillez sélectionner une des options: "Etablir ordonnance", "Demander bilan", "Aucun".');
      return;
    }

    console.log('Date et Heure:', datetime);
    console.log('Résumé:', resume);
    console.log('Action choisie:', this.action);

    // Gestion des actions sélectionnées
    switch (this.action) {
      case 'ordonnance':
        console.log('Navigation vers Établir ordonnance');
        break;

      case 'bilan':
        console.log('Navigation vers Demander bilan');
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
