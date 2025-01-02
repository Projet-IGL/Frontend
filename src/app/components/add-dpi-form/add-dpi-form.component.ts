import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreerDPIService } from '../../services/creer-dpi.service';

/**
 * Composant pour le formulaire d'ajout de DPI (Dossier Patient Informatisé).
 * Permet à l'utilisateur de saisir les informations nécessaires pour créer un DPI et générer un QR code.
 */
@Component({
  selector: 'app-add-dpi-form',  // Sélecteur du composant
  imports: [CommonModule, ReactiveFormsModule],  // Modules nécessaires pour les formulaires réactifs
  standalone: true,  // Composant autonome
  templateUrl: './add-dpi-form.component.html',  // Template HTML associé
  styleUrl: './add-dpi-form.component.css'  // Fichier CSS pour la mise en forme
})
export class AddDpiFormComponent {
  /**
   * Formulaire réactif pour saisir les informations du DPI.
   */
  dpiForm: FormGroup;

  /**
   * Message d'erreur pour l'affichage en cas d'échec.
   */
  errorMsg: string = '';

  /**
   * URL générée pour le QR code.
   */
  qrCodeUrl: string = '';

  /**
   * Constructeur du composant.
   * Initialise le formulaire avec des champs et leurs validations.
   * @param fb - Service FormBuilder pour la création de formulaires réactifs.
   * @param CreerDPIService - Service pour gérer la création du DPI.
   */
  constructor(private fb: FormBuilder, private CreerDPIService: CreerDPIService) {
    // Initialisation des champs du formulaire avec des règles de validation
    this.dpiForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      nss: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      telephoneUrgence: ['', Validators.required],
      adresse: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      medecinTraitant: ['', Validators.required],
      nomUtilisateur: ['', Validators.required],
      motDePasse: ['', Validators.required],
      mutuelle: ['']  // Champ optionnel pour la mutuelle
    });
  }

  /**
   * Génère un QR code à partir du numéro de sécurité sociale (NSS) saisi.
   * @param inputNumber - Numéro de sécurité sociale (NSS) du patient.
   */
  generateQRCode(inputNumber: number): void {
    if (isNaN(inputNumber)) {
      console.error('Veuillez entrer un numéro NSS valide.');
      return;
    }
    this.qrCodeUrl = `https://quickchart.io/qr?text=${inputNumber}`;
  }

  /**
   * Soumet le formulaire pour créer un DPI.
   * Si le formulaire est valide, envoie les données au service de création de DPI
   * et génère un QR code correspondant au NSS du patient.
   */
  onSubmit(): void {
    if (this.dpiForm.valid) {
      console.log('Données du formulaire :', this.dpiForm.value);  // Affichage des données pour debug
      this.generateQRCode(this.dpiForm.value.nss);  // Génération du QR code
      console.log('QR code généré :', this.qrCodeUrl);  // Debug de l'URL du QR code

      // Appel au service pour créer le DPI
      this.CreerDPIService.CreerDpi(
        this.dpiForm.value.nom,
        this.dpiForm.value.prenom,
        this.dpiForm.value.email,
        this.dpiForm.value.nss,
        this.dpiForm.value.telephone,
        this.dpiForm.value.telephoneUrgence,
        this.dpiForm.value.nomUtilisateur,
        this.dpiForm.value.motDePasse,
        this.dpiForm.value.dateNaissance,
        this.dpiForm.value.adresse,
        this.dpiForm.value.medecinTraitant,
        this.dpiForm.value.mutuelle
      ).subscribe(
        (response) => {
          console.log('Réponse du service :', response);  // Affichage de la réponse du backend
        },
        (error) => {
          this.errorMsg = error;  // Mise à jour du message d'erreur
          console.error('Une erreur s\'est produite :', error);  // Debug de l'erreur
        }
      );
    } else {
      console.error('Le formulaire est invalide.');  // Message en cas de formulaire invalide
    }
  }
}
