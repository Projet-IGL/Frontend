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
  time: string = '';
  nss: string = '';
  compteRendu: string = '';
  numcons: string = '';  // Date de consultation
  isSaved: boolean = false;
  isNssInvalid: boolean = false;
  isConsInvalid: boolean = false;
  imageRadiographie: File | null = null;  // L'image Radiographie à envoyer sous forme de fichier
  imageRadiographiePreview: string | null = null;  // Prévisualisation de l'image
  imageType: string = 'Radiographie';  // Le type d'image à utiliser
  user: any = null;  // Informations utilisateur
  radiologueId: string | null = null;  // ID de l'utilisateur, spécifiquement un laborantin
  existingNss = ['123456789', '987654321', '112233445'];
  existingConsultations = ['2024-01-01T10:00', '2024-01-15T14:30', '2024-02-01T08:45']; // Simuler des consultations valides

  constructor(
    private router: Router,
    private ajouterBilanRadiologiqueService: AjouterBilanRadiologiqueService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    if (this.user && this.user.role === 'Radiologue') {
      console.log(this.user);
      this.radiologueId = this.user.data.id;  // Assurez-vous que l'utilisateur est authentifié
    }
  }

  // Vérification du NSS
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

  // Vérification du numéro de consultation
  checkConsultationExistence() {
    this.ajouterBilanRadiologiqueService.checkConsultationExistence(this.nss, this.numcons).subscribe(
      (response) => {
        this.isConsInvalid = !response.exists; // Utilisez le champ 'exists'
        if (!response.exists && response.message) {
          alert(response.message); // Affichez le message d'erreur retourné par le backend
        }
      },
      (error) => {
        console.error('Erreur lors de la vérification de la consultation:', error);
        this.isConsInvalid = true; // Considérer comme invalide en cas d'erreur
      }
    );
  }
  

  onSave() {
    if (
      this.time.trim() !== '' &&
      this.nss.trim() !== '' &&
      !this.isNssInvalid &&
      this.numcons.trim() !== '' &&
      !this.isConsInvalid &&
      this.imageRadiographie  // Vérifiez uniquement l'image Radiographie
    ) {
      if (!this.radiologueId) {
        alert('Utilisateur non authentifié ou rôle incorrect.');
        return;
      }

      // Créer un objet FormData pour envoyer les données et l'image au backend
      const formData = new FormData();
      formData.append('time', this.time);
      formData.append('nss', this.nss);
      formData.append('numcons', this.numcons);
      formData.append('compteRendu', this.compteRendu);
      formData.append('radiologueId', this.radiologueId);  // Ajouter l'ID du radiologue
      // Afficher les données dans la console avant l'envoi
    console.log('Données à envoyer :');
    console.log('Time:', this.time);
    console.log('NSS:', this.nss);
    console.log('Date de consultation:', this.numcons);
    console.log('Compte rendu:', this.compteRendu);
    console.log('Radiologue ID:', this.radiologueId);
    if (this.imageRadiographie) {
      formData.append('imageRadiographie', this.imageRadiographie, this.imageRadiographie.name);  // Ajouter l'image sous forme de fichier
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

  onCancel() {
    console.log('Formulaire annulé');
    this.resetForm();
  }

  resetForm() {
    this.time = '';
    this.nss = '';
    this.compteRendu = '';
    this.imageRadiographie = null;
    this.imageRadiographiePreview = null;
    this.numcons = '';
  }

  triggerFileInput(imageType: string) {
    const inputElement = document.getElementById('image' + imageType) as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
  }

  onImageUpload(event: Event, imageType: string) {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file) {
      // Assigner le fichier à l'image
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

  voirProfile() {
    this.router.navigate(['/profilRadiologue']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/Landing-page']);
  }
}