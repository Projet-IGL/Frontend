import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AjouterSoinService } from '../../services/ajouter-soin.service'; // Import du service
import { AuthService } from '../../services/auth.service'; // Import du AuthService

@Component({
  selector: 'app-ajouter-soin-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-soin-page.component.html',
  styleUrls: ['./ajouter-soin-page.component.css']
})
export class AjouterSoinPageComponent implements OnInit {
  time: string = ''; 
  nss: string = '';
  details: string = '';
  observations: string = '';
  medicamentAdministre: boolean = false;

  isSaved: boolean = false;
  isNssInvalid: boolean = false;
  existingNss = ['123456789', '987654321', '112233445'];

  infirmierId: string | null = null; // ID de l'infirmier
  user: any = null; // Informations utilisateur

  constructor(
    private router: Router,
    private ajouterSoinService: AjouterSoinService,
    private authService: AuthService // Injection du AuthService
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser(); // Récupère les informations de l'utilisateur
    console.log('Utilisateur récupéré:', this.user); // Affiche les informations de l'utilisateur dans la console
    if (this.user && this.user.role === 'Infirmier') {
      this.infirmierId = this.user.data.id; // Récupérer l'ID de l'infirmier
      console.log(this.infirmierId);
    }
  }


  // Méthode pour vérifier si le NSS existe via le backend
  checkNssExistence() {
    if (this.nss.trim() !== '') {
      this.ajouterSoinService.checkNssExistence(this.nss).subscribe(
        (response) => {
          this.isNssInvalid = !response.exists;
        },
        (error) => {
          console.error('Erreur lors de la vérification du NSS:', error);
          this.isNssInvalid = true;
        }
      );
    } else {
      this.isNssInvalid = true;
    }
  }
  

  // Validation du formulaire
  isFormValid(): boolean {
    return this.time.trim() !== '' && this.nss.trim() !== '' && !this.isNssInvalid;
  }

  // Sauvegarde des données
  onSave() {
    if (this.isFormValid()) {
      // Créer un objet soin avec l'ID de l'infirmier
      const soin = {
        time: this.time,
        nss: this.nss,
        details: this.details,
        observations: this.observations,
        medicamentAdministre: this.medicamentAdministre,
        infirmierId: this.infirmierId, // Ajouter l'ID de l'infirmier
      };

      this.ajouterSoinService.addSoin(soin).subscribe(
        (response) => {
          console.log('Soin enregistré avec succès:', response);
          console.log('Soin enregistré avec succès:', soin);
          this.isSaved = true;
          this.resetForm();
          setTimeout(() => (this.isSaved = false), 3000);
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement du soin:', error);
          alert('Erreur lors de l\'enregistrement, veuillez réessayer.');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs obligatoires et vérifier le NSS.');
    }
  }

  // Méthode pour annuler
  onCancel() {
    console.log('Formulaire annulé');
    this.resetForm();
  }

  // Réinitialisation du formulaire
  resetForm() {
    this.time = '';
    this.nss = '';
    this.details = '';
    this.observations = '';
    this.medicamentAdministre = false;
    this.isNssInvalid = false;
  }

  // Navigation
  voirProfile() {
    this.router.navigate(['/profilInfermier']);
  }

  logout() {
    this.router.navigate(['/Landing-page']);
  }
}
