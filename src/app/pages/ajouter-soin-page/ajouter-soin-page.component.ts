import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AjouterSoinService } from '../../services/ajouter-soin.service'; // Import du service
import { AuthService } from '../../services/auth.service'; // Import du AuthService

/**
 * Composant pour ajouter un soin.
 */
@Component({
  selector: 'app-ajouter-soin-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-soin-page.component.html',
  styleUrls: ['./ajouter-soin-page.component.css']
})
export class AjouterSoinPageComponent implements OnInit {
  /** Heure à laquelle le soin est administré. */
  time: string = ''; 

  /** Numéro de Sécurité Sociale (NSS) du patient. */
  nss: string = '';

  /** Détails supplémentaires du soin. */
  details: string = '';

  /** Observations du soin. */
  observations: string = '';

  /** Indique si un médicament a été administré. */
  medicamentAdministre: boolean = false;

  /** Indique si les données ont été enregistrées avec succès. */
  isSaved: boolean = false;

  /** Indique si le NSS est invalide. */
  isNssInvalid: boolean = false;

  /** ID de l'infirmier connecté. */
  infirmierId: string | null = null;

  /** Informations de l'utilisateur connecté. */
  user: any = null;

  /**
   * Constructeur du composant.
   * @param router Gestionnaire de navigation.
   * @param ajouterSoinService Service pour ajouter un soin.
   * @param authService Service pour la gestion de l'authentification.
   */
  constructor(
    private router: Router,
    private ajouterSoinService: AjouterSoinService,
    private authService: AuthService
  ) {}

  /**
   * Méthode appelée lors de l'initialisation du composant.
   */
  ngOnInit() {
    this.user = this.authService.getUser(); // Récupère les informations de l'utilisateur
    console.log('Utilisateur récupéré:', this.user); // Affiche les informations de l'utilisateur dans la console
    if (this.user && this.user.role === 'Infirmier') {
      this.infirmierId = this.user.data.id; // Récupérer l'ID de l'infirmier
      console.log(this.infirmierId);
    }
  }

  /**
   * Vérifie si le NSS existe via le backend.
   */
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

  /**
   * Vérifie si le formulaire est valide.
   * @returns `true` si le formulaire est valide, sinon `false`.
   */
  isFormValid(): boolean {
    return this.time.trim() !== '' && this.nss.trim() !== '' && !this.isNssInvalid;
  }

  /**
   * Enregistre les données du soin.
   */
  onSave() {
    if (this.isFormValid()) {
      const soin = {
        time: this.time,
        nss: this.nss,
        details: this.details,
        observations: this.observations,
        medicamentAdministre: this.medicamentAdministre,
        infirmierId: this.infirmierId,
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

  /**
   * Annule le formulaire en cours.
   */
  onCancel() {
    console.log('Formulaire annulé');
    this.resetForm();
  }

  /**
   * Réinitialise les champs du formulaire.
   */
  resetForm() {
    this.time = '';
    this.nss = '';
    this.details = '';
    this.observations = '';
    this.medicamentAdministre = false;
    this.isNssInvalid = false;
  }

  /**
   * Navigue vers la page de profil de l'infirmier.
   */
  voirProfile() {
    this.router.navigate(['/profilInfermier']);
  }

  /**
   * Déconnecte l'utilisateur et navigue vers la page d'accueil.
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/Landing-page']);
  }
}
