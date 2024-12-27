import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-ajouter-bilan-biologique',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajouter-bilan-biologique.component.html',
  styleUrls: ['./ajouter-bilan-biologique.component.css'],
})
export class AjouterBilanBiologiqueComponent {
  time: string = '';
  nss: string = '';
  glycemie: number | null = null;
  pression: number | null = null;
  cholesterol: number | null = null;

  isSaved: boolean = false;
  isNssInvalid: boolean = false;
  showGraph: boolean = false;
  graphImage: string | null = null; // Stocke l'image du graphique

  existingNss = ['123456789', '987654321', '112233445'];

  constructor(private router: Router) {}

  // Méthodes de navigation
  voirProfile() {
    this.router.navigate(['/profilLaborantin']);
  }

  logout() {
    this.router.navigate(['/Landing-page']);
  }

  // Validation NSS
  checkNssExistence() {
    this.isNssInvalid = !this.existingNss.includes(this.nss);
  }

  // Sauvegarde
  onSave() {
    if (
      this.time.trim() !== '' &&
      this.nss.trim() !== '' &&
      !this.isNssInvalid &&
      this.glycemie !== null &&
      this.pression !== null &&
      this.cholesterol !== null &&
      this.glycemie > 0 &&
      this.pression > 0 &&
      this.cholesterol > 0
    ) {
      this.isSaved = true;
      setTimeout(() => {
        this.isSaved = false;
      }, 3000);
    } else {
      alert('Veuillez remplir tous les champs avec des valeurs valides.');
    }
    this.saveGraph();

  }

  // Annulation
  onCancel() {
    this.resetForm();
  }

  resetForm() {
    this.time = '';
    this.nss = '';
    this.glycemie = null;
    this.pression = null;
    this.cholesterol = null;
    this.showGraph = false;
    this.graphImage = null;  // Reset the saved graph image
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
      // Stocker les données du graphique
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

      console.log('Données du graphique:', graphData); // Afficher les données dans la console

      this.showGraph = true;

      // Forcer le rafraîchissement du DOM pour s'assurer que le canvas est bien visible
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
      }, 0); // Forcer un léger délai pour attendre que le canvas soit bien visible
    } else {
      alert('Veuillez entrer des valeurs strictement positives pour tous les champs.');
    }
  }

  // Enregistrer le graphique et afficher dans la console au clic
  saveGraph() {
    const formData = {
      time: this.time,
      nss: this.nss,
      glycemie: this.glycemie,
      pression: this.pression,
      cholesterol: this.cholesterol,
    };

    // Afficher les données du formulaire dans la console
    console.log('Données du formulaire enregistrées:', formData);

    // Afficher le graphique en base64 dans la console
    if (this.graphImage) {
      console.log('Graphique enregistré en image:', this.graphImage);
    } else {
      console.log('Aucun graphique généré.');
    }
  }
}
