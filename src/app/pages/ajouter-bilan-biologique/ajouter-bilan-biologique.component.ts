import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AjouterBilanBiologiqueService } from '../../services/ajouter-bilan-biologique.service';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-ajouter-bilan-biologique',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-bilan-biologique.component.html',
  styleUrls: ['./ajouter-bilan-biologique.component.css'],
})
export class AjouterBilanBiologiqueComponent implements OnInit {
  /** Heure de l'examen */
  time: string = '';
  /** Numéro de sécurité sociale */
  nss: string = '';
  /** Numéro de consultation */
  numcons: string = '';
  /** Valeur de la glycémie */
  glycemie: number | null = null;
  /** Valeur de la pression artérielle */
  pression: number | null = null;
  /** Valeur du cholestérol */
  cholesterol: number | null = null;
  /** Fichier image (graphique ou autre) */
  imageFile: File | null = null;
  /** Indicateur de succès lors de l'enregistrement */
  isSaved: boolean = false;
  /** Indicateur si le NSS est invalide */
  isNssInvalid: boolean = false;
  /** Indicateur si le numéro de consultation est invalide */
  isConsInvalid: boolean = false;
  /** Indicateur pour afficher le graphique */
  showGraph: boolean = false;
  /** Image générée du graphique en base64 */
  graphImage: string | null = null;
  /** ID du laborantin authentifié */
  laborantinId: string | null = null;
  /** Informations sur l'utilisateur connecté */
  user: any = null;

  constructor(
    private router: Router,
    private ajouterBilanBiologiqueService: AjouterBilanBiologiqueService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  /**
   * Méthode d'initialisation du composant
   * Récupère l'utilisateur authentifié et initialise son rôle.
   * Si l'utilisateur est un laborantin, son ID est stocké pour les actions suivantes.
   */
  ngOnInit() {
    this.user = this.authService.getUser();
    if (this.user && this.user.role === 'Laborantin') {
      console.log(this.user);
      this.laborantinId = this.user.data.id;
      console.log(' ID ',this.laborantinId)
    }
  }

  /**
   * Redirige l'utilisateur vers son profil de laborantin.
   */
  voirProfile() {
    this.router.navigate(['/profilLaborantin']);
  }

  /**
   * Déconnecte l'utilisateur et le redirige vers la page d'accueil.
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/Landing-page']);
  }

  /**
   * Vérifie si le NSS existe via le service `ajouterBilanBiologiqueService`.
   * Met à jour l'état `isNssInvalid` pour indiquer si le NSS est valide ou non.
   * Affiche une erreur dans la console en cas de problème.
   */
  checkNssExistence() {
    this.ajouterBilanBiologiqueService.checkNssExistence(this.nss).subscribe(
      (response) => {
        this.isNssInvalid = !response.exists;
      },
      (error) => {
        console.error('Erreur lors de la vérification du NSS:', error);
        this.isNssInvalid = true;
      }
    );
  }

  /**
   * Vérifie si le numéro de consultation est valide via le service `ajouterBilanBiologiqueService`.
   * Met à jour l'état `isConsInvalid` pour indiquer si le numéro de consultation existe ou non.
   * Affiche une erreur dans la console en cas de problème.
   */
  checkConsultationExistence() {
    this.ajouterBilanBiologiqueService.checkConsultationExistence(this.nss, this.numcons).subscribe(
      (response) => {
        this.isConsInvalid = !response.exists;
        console.log('this.isConsInvalid',this.isConsInvalid );
      },
      (error) => {
        console.error('Erreur lors de la vérification de la consultation:', error);
        this.isConsInvalid = true;
        console.log('this.isConsInvalid',this.isConsInvalid );
      }
    );
  }

  /**
   * Méthode pour sauvegarder le bilan biologique.
   * Vérifie si tous les champs sont remplis et valides avant d'envoyer les données.
   * Si des erreurs sont détectées, elles sont affichées sous forme d'alertes.
   * Envoie le bilan avec une image (si disponible) au backend.
   */
  onSave() {
    if (
      this.time.trim() !== '' &&
      this.nss.trim() !== '' &&
      !this.isNssInvalid &&
      this.numcons.trim() !== '' &&
      !this.isConsInvalid &&
      this.glycemie !== null &&
      this.pression !== null &&
      this.cholesterol !== null &&
      this.glycemie > 0 &&
      this.pression > 0 &&
      this.cholesterol > 0
    ) {
      if (!this.laborantinId) {
        alert('Utilisateur non authentifié ou rôle incorrect.');
        return;
      }

      // Création du formulaire avec les données à envoyer
      const formData = new FormData();
      formData.append('time', this.time);
      formData.append('nss', this.nss);
      formData.append('numcons', this.numcons);
      formData.append('glycemie', this.glycemie.toString());
      formData.append('pression', this.pression.toString());
      formData.append('cholesterol', this.cholesterol.toString());
      
      if (this.imageFile) {
        console.log('Nom:', this.imageFile.name);
        console.log('Type:', this.imageFile.type);
        console.log('Taille:', this.imageFile.size);
      }
      if (this.imageFile) {
        formData.append('imageFile', this.imageFile, this.imageFile.name);
      }
      formData.append('laborantinId', this.laborantinId);
      console.log('IMAGEFILE', this.imageFile);

      // Envoie du formulaire au backend pour sauvegarde
      this.ajouterBilanBiologiqueService.addBilan(formData).subscribe(
        (response) => {
          console.log('Bilan enregistré avec succès!', response);
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
          alert('Ce bilan est déjà effectué');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs avec des valeurs valides.');
    }
  }

  /**
   * Annule l'action en réinitialisant le formulaire et les valeurs de l'état.
   */
  onCancel() {
    this.resetForm();
  }

  /**
   * Réinitialise toutes les valeurs du formulaire et les états associés.
   */
  resetForm() {
    this.time = '';
    this.nss = '';
    this.numcons = '';
    this.glycemie = null;
    this.pression = null;
    this.cholesterol = null;
    this.showGraph = false;
    this.graphImage = null;
    this.imageFile = null; // Réinitialiser le fichier image
  }

  /**
   * Génère un graphique avec les valeurs de glycémie, pression et cholestérol.
   * Affiche le graphique sous forme d'image, puis convertit le graphique en un fichier image base64.
   * Ce fichier image peut être utilisé comme un fichier dans le formulaire.
   */
  generateGraph() {
    if (
      this.glycemie !== null &&
      this.pression !== null &&
      this.cholesterol !== null &&
      this.glycemie > 0 &&
      this.pression > 0 &&
      this.cholesterol > 0
    ) {
      const graphData = {
        labels: ['Glycémie', 'Pression Artérielle', 'Cholestérol'],
        datasets: [
          {
            label: 'Résultats',
            data: [this.glycemie, this.pression, this.cholesterol],
            backgroundColor: ['#3D3BF3', '#AE9DFD', '#2A2BF2'],
            borderWidth: 1,
          },
        ],
      };
  
      this.showGraph = true;
  
      setTimeout(() => {
        const ctx = document.getElementById('resultGraph') as HTMLCanvasElement;
        const chart = new Chart(ctx, {
          type: 'bar',
          data: graphData,
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
  
        setTimeout(() => {
          const graphBase64 = ctx.toDataURL('image/png');
          this.graphImage = graphBase64;
  
          const byteString = atob(graphBase64.split(',')[1]);
          const mimeString = graphBase64.split(',')[0].split(':')[1].split(';')[0];
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }
  
          this.imageFile = new File([ia], 'graphique.png', { type: mimeString });
          console.log('Graphique converti en fichier :', this.imageFile.name);
        }, 100); // Attendre un peu pour que le graphique soit bien dessiné avant la conversion
      }, 0);
    } else {
      alert('Veuillez entrer des valeurs strictement positives pour tous les champs.');
    }
  }
}
