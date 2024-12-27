import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-bilan-radiologique',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-bilan-radiologique.component.html',
  styleUrls: ['./ajouter-bilan-radiologique.component.css']
})
export class AjouterBilanRadiologiqueComponent {
  time: string = '';
  nss: string = '';
  compteRendu: string = '';
  isSaved: boolean = false;
  isNssInvalid: boolean = false;

  imageIRM: string | null = null;
  imageRadiographie: string | null = null;
  imageEchographie: string | null = null;

  existingNss = ['123456789', '987654321', '112233445'];

  checkNssExistence() {
    this.isNssInvalid = !this.existingNss.includes(this.nss);
  }

  onSave() {
    if (
      this.time.trim() !== '' &&
      this.nss.trim() !== '' &&
      !this.isNssInvalid &&
      this.imageIRM &&
      this.imageRadiographie &&
      this.imageEchographie
    ) {
      console.log('Bilan Radiologique:', {
        time: this.time,
        nss: this.nss,
        compteRendu: this.compteRendu,
        imageIRM: this.imageIRM,
        imageRadiographie: this.imageRadiographie,
        imageEchographie: this.imageEchographie,
      });
  
      this.isSaved = true;
      setTimeout(() => {
        this.isSaved = false;
      }, 3000);
    } else {
      alert('Veuillez remplir tous les champs obligatoires et attacher les trois images.');
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
    this.imageIRM = null;
    this.imageRadiographie = null;
    this.imageEchographie = null;
  }

  // Fonction pour déclencher l'upload de fichier
  triggerFileInput(imageType: string) {
    const inputElement = document.getElementById(`image${imageType}`) as HTMLInputElement;
    if (inputElement) {
      inputElement.click();  // Ouvre la fenêtre de sélection de fichier
    }
  }

  onImageUpload(event: Event, imageType: string) {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (imageType === 'IRM') {
          this.imageIRM = reader.result as string;
        } else if (imageType === 'Radiographie') {
          this.imageRadiographie = reader.result as string;
        } else if (imageType === 'Echographie') {
          this.imageEchographie = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  constructor(private router: Router) {}

  // Méthode pour rediriger vers la page de profil
  voirProfile() {
    this.router.navigate(['/profilRadiologue']);
  }

  // Méthode pour rediriger vers la page de déconnexion
  logout() {
    this.router.navigate(['/Landing-page']);
  }
}
