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
  time: string = '';
  nss: string = '';
  datecons: string = '';
  glycemie: number | null = null;
  pression: number | null = null;
  cholesterol: number | null = null;
  imageFile: File | null = null;  // Stocke le fichier image
  isSaved: boolean = false;
  isNssInvalid: boolean = false;
  isConsInvalid: boolean = false;
  showGraph: boolean = false;
  graphImage: string | null = null;
  laborantinId: string | null = null; // ID du laborantin
  existingNss = ['123456789', '987654321', '112233445'];
  existingConsultations = ['2024-01-01T10:00', '2024-01-15T14:30', '2024-02-01T08:45']; // Simuler des consultations valides

  user: any = null; // Informations utilisateur

  constructor(
    private router: Router,
    private ajouterBilanBiologiqueService: AjouterBilanBiologiqueService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    if (this.user && this.user.role === 'Laborantin') {
      console.log(this.user);
      this.laborantinId = this.user.id;
    }
  }

  // Méthodes de navigation
  voirProfile() {
    this.router.navigate(['/profilLaborantin']);
  }

  logout() {
    this.router.navigate(['/Landing-page']);
  }

    // Vérification du NSS
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
  
    // Vérification du numéro de consultation
    checkConsultationExistence() {
      this.ajouterBilanBiologiqueService.checkConsultationExistence(this.datecons).subscribe(
        (response) => {
          this.isConsInvalid = !response.exists;
        },
        (error) => {
          console.error('Erreur lors de la vérification de la consultation:', error);
          this.isConsInvalid = true;
  
        }
      );
    }

  // Sauvegarde
  onSave() {
    if (
      this.time.trim() !== '' &&
      this.nss.trim() !== '' &&
      !this.isNssInvalid &&
      this.datecons.trim() !== '' &&
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

      // Créer un objet de bilan biologique avec l'ID du laborantin et l'image
      const formData = new FormData();
      formData.append('time', this.time);
      formData.append('nss', this.nss);
      formData.append('datecons', this.datecons);
      formData.append('glycemie', this.glycemie.toString());
      formData.append('pression', this.pression.toString());
      formData.append('cholesterol', this.cholesterol.toString());
      if (this.imageFile) {
        formData.append('image', this.imageFile, this.imageFile.name);
      }
      formData.append('laborantin_id', this.laborantinId);

      // Appel du service pour sauvegarder le bilan avec une image
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
          alert('Erreur lors de l\'ajout du bilan, veuillez réessayer.');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs avec des valeurs valides.');
    }
  }

  // Annulation
  onCancel() {
    this.resetForm();
  }

  resetForm() {
    this.time = '';
    this.nss = '';
    this.datecons = '';
    this.glycemie = null;
    this.pression = null;
    this.cholesterol = null;
    this.showGraph = false;
    this.graphImage = null;
    this.imageFile = null; // Réinitialiser le fichier image
  }

  // Gestion de l'image
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.imageFile = event.target.files[0];
    }
  }

  // Génération du graphique
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

        // Sauvegarder le graphique en tant qu'image après sa création
        this.graphImage = ctx.toDataURL('image/png');
      }, 0);
    } else {
      alert('Veuillez entrer des valeurs strictement positives pour tous les champs.');
    }
  }
}
