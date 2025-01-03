import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AjouterBilanRadiologiqueService } from '../../services/ajouter-bilan-rdiologique.service';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-bilan-radiologique',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-bilan-radiologique.component.html',
  styleUrls: ['./ajouter-bilan-radiologique.component.css']
})
export class AjouterBilanRadiologiqueComponent implements OnInit {
  /** Heure de l'examen */
  time: string = '';
  /** Numéro de sécurité sociale */
  nss: string = '';
  /** Compte rendu de l'examen radiologique */
  compteRendu: string = '';
  /** Numéro de consultation */
  numcons: string = '';
  /** Indicateur de succès lors de l'enregistrement */
  isSaved: boolean = false;
  /** Indicateur de validité du NSS */
  isNssInvalid: boolean = false;
  /** Indicateur de validité du numéro de consultation */
  isConsInvalid: boolean = false;
  /** Fichier d'image de radiographie */
  imageRadiographie: File | null = null;
  /** Prévisualisation de l'image de radiographie */
  imageRadiographiePreview: string | null = null;
  /** Type d'image à utiliser (Radiographie) */
  imageType: string = 'Radiographie';
  /** Informations de l'utilisateur authentifié */
  user: any = null;
  /** ID du radiologue authentifié */
  radiologueId: string | null = null;

  constructor(
    private router: Router,
    private ajouterBilanRadiologiqueService: AjouterBilanRadiologiqueService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  /**
   * Méthode d'initialisation du composant.
   * Récupère les informations de l'utilisateur connecté et valide son rôle de radiologue.
   * Si l'utilisateur est un radiologue, son ID est stocké pour les actions suivantes.
   */
  ngOnInit() {
    this.user = this.authService.getUser();
    if (this.user && this.user.role === 'Radiologue') {
      console.log(this.user);
      this.radiologueId = this.user.data.id;
    }
  }

  /**
   * Vérifie si le NSS existe via le service `ajouterBilanRadiologiqueService`.
   * Met à jour l'état `isNssInvalid` pour indiquer si le NSS est valide ou non.
   * Affiche une erreur dans la console en cas de problème.
   */
  checkNssExistence() {
    this.ajouterBilanRadiologiqueService.checkNssExistence(this.nss).subscribe(
      (response) => {
        this.isNssInvalid = !response.exists;
        console.log('isNssInvalid ', this.isNssInvalid);
      },
      (error) => {
        console.error('Erreur lors de la vérification du NSS:', error);
        this.isNssInvalid = true;
      }
    );
  }

  /**
   * Vérifie si le numéro de consultation existe via le service `ajouterBilanRadiologiqueService`.
   * Met à jour l'état `isConsInvalid` pour indiquer si le numéro de consultation existe ou non.
   * Affiche un message d'erreur en cas de problème.
   */
  checkConsultationExistence() {
    this.ajouterBilanRadiologiqueService.checkConsultationExistence(this.nss, this.numcons).subscribe(
      (response) => {
        this.isConsInvalid = !response.exists;
        if (!response.exists && response.message) {
          alert(response.message);  // Affiche le message d'erreur retourné par le backend
        }
      },
      (error) => {
        console.error('Erreur lors de la vérification de la consultation:', error);
        this.isConsInvalid = true;
      }
    );
  }

  /**
   * Méthode pour sauvegarder le bilan radiologique.
   * Vérifie que tous les champs nécessaires sont remplis avant d'envoyer les données.
   * Si une erreur se produit, un message d'erreur est affiché à l'utilisateur.
   */
  onSave() {
    if (
      this.time.trim() !== '' &&
      this.nss.trim() !== '' &&
      !this.isNssInvalid &&
      this.numcons.trim() !== '' &&
      !this.isConsInvalid &&
      this.imageRadiographie
    ) {
      if (!this.radiologueId) {
        alert('Utilisateur non authentifié ou rôle incorrect.');
        return;
      }

      // Crée un objet FormData pour envoyer les données et l'image au backend
      const formData = new FormData();
      formData.append('time', this.time);
      formData.append('nss', this.nss);
      formData.append('numcons', this.numcons);
      formData.append('compteRendu', this.compteRendu);
      formData.append('radiologueId', this.radiologueId);  // Ajoute l'ID du radiologue

      // Affichage des données dans la console avant l'envoi
      console.log('Données à envoyer :');
      console.log('Time:', this.time);
      console.log('NSS:', this.nss);
      console.log('Date de consultation:', this.numcons);
      console.log('Compte rendu:', this.compteRendu);
      console.log('Radiologue ID:', this.radiologueId);

      // Ajoute l'image radiographie si elle existe
      if (this.imageRadiographie) {
        formData.append('imageRadiographie', this.imageRadiographie, this.imageRadiographie.name); 
        console.log('Nom de l\'image:', this.imageRadiographie.name);
        console.log('Taille de l\'image:', this.imageRadiographie.size, 'octets');
      }

      // Appel du service pour sauvegarder le bilan radiologique
      this.ajouterBilanRadiologiqueService.addBilan(formData).subscribe(
        (response) => {
          console.log('Bilan Radiologique enregistré avec succès!', response);
          this.isSaved = true;
          setTimeout(() => {
            this.isSaved = false;
          }, 3000);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du bilan:', error);
          if (error.status === 500) {
            console.error('Erreur interne du serveur:', error.message);
          }
          alert('Ce bilan est déjà effectué.');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs obligatoires et attacher l\'image de Radiographie.');
    }
  }

  /**
   * Annule l'action en réinitialisant le formulaire et les valeurs de l'état.
   */
  onCancel() {
    console.log('Formulaire annulé');
    this.resetForm();
  }

  /**
   * Réinitialise toutes les valeurs du formulaire et les états associés.
   */
  resetForm() {
    this.time = '';
    this.nss = '';
    this.compteRendu = '';
    this.imageRadiographie = null;
    this.imageRadiographiePreview = null;
    this.numcons = '';
  }

  /**
   * Déclenche l'ouverture de la fenêtre de sélection de fichier pour l'upload d'une image.
   * @param {string} imageType Type d'image à télécharger (par exemple, Radiographie).
   */
  triggerFileInput(imageType: string) {
    const inputElement = document.getElementById('image' + imageType) as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
  }

  /**
   * Méthode pour traiter l'upload de l'image de radiographie.
   * Crée une prévisualisation de l'image pour l'affichage à l'utilisateur.
   * @param {Event} event L'événement d'upload de fichier.
   * @param {string} imageType Le type d'image (par exemple, 'Radiographie').
   */
  onImageUpload(event: Event, imageType: string) {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file) {
      // Assigner le fichier à l'image de radiographie
      if (imageType === 'Radiographie') {
        this.imageRadiographie = file;

        // Créer une prévisualisation de l'image en base64 pour l'affichage
        const reader = new FileReader();
        reader.onload = () => {
          this.imageRadiographiePreview = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  /**
   * Redirige l'utilisateur vers son profil radiologue.
   */
  voirProfile() {
    this.router.navigate(['/profilRadiologue']);
  }

  /**
   * Déconnecte l'utilisateur et le redirige vers la page d'accueil.
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/Landing-page']);
  }
}
