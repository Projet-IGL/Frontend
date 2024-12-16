import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-soin-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-soin-page.component.html',
  styleUrls: ['./ajouter-soin-page.component.css']
})
export class AjouterSoinPageComponent {
  // Propriétés du formulaire
  time: string = ''; // Remplace la propriété "date"
  nss: string = ''; // Numéro NSS du patient
  details: string = '';
  observations: string = '';
  medicamentAdministre: boolean = false;

  // Variable pour gérer l'affichage du message de succès
  isSaved: boolean = false;
  isNssInvalid: boolean = false; // Indicateur d'erreur pour le NSS

  // Liste des numéros de patients (NSS)
  existingNss = [
    '123456789', 
    '987654321', 
    '112233445', // NSS d'exemple
  ];

  // Méthode pour vérifier si le NSS existe
  checkNssExistence() {
    this.isNssInvalid = !this.existingNss.includes(this.nss);
  }

  // Méthode pour vérifier la validité du formulaire
  isFormValid(): boolean {
    return this.time.trim() !== '' && this.nss.trim() !== '' && !this.isNssInvalid;
  }

  // Méthode pour enregistrer les données
  onSave() {
    if (this.isFormValid()) {
      console.log('Données du formulaire :', {
        time: this.time,
        nss: this.nss,
        details: this.details,
        observations: this.observations,
        medicamentAdministre: this.medicamentAdministre,
      });

      this.isSaved = true;
      this.resetForm();

      setTimeout(() => {
        this.isSaved = false;
      }, 3000);
    } else {
      alert('Veuillez remplir tous les champs obligatoires et vérifier le NSS.');
    }
  }

  // Méthode pour annuler
  onCancel() {
    console.log('Formulaire annulé');
    this.resetForm();
  }

  // Réinitialiser les champs du formulaire
  resetForm() {
    this.time = '';
    this.nss = ''; // Réinitialisation du NSS
    this.details = '';
    this.observations = '';
    this.medicamentAdministre = false;
    this.isNssInvalid = false; // Réinitialisation du message d'erreur NSS
  }
  constructor(private router: Router) {}

  // Méthode pour rediriger vers la page de profil
  voirProfile() {
    this.router.navigate(['/profilInfermier']);
  }

  // Méthode pour rediriger vers la page de déconnexion

  logout() {
    this.router.navigate(['/Landing-page']);
  }
}
