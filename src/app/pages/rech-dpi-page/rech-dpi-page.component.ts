import { Component, HostListener, OnInit } from '@angular/core';
import { AddDpiNavBarComponent } from "../../components/add-dpi-nav-bar/add-dpi-nav-bar.component";
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QRCodeComponent } from 'angularx-qrcode';
import { CommonModule } from '@angular/common'; // Ajoutez CommonModule
import { Router } from '@angular/router';
import { RechercheService } from '../../services/recherche.service';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { PatientService } from '../../services/patient.service';
import jsQR from 'jsqr';

/**
 * Composant représentant la page de recherche de DPI (Dossier Patient Informatisé).
 * Ce composant permet de scanner des QR codes, de sélectionner une image de QR code et de rechercher des patients.
 */
@Component({
  selector: 'app-rech-dpi-page', // Sélecteur du composant
  imports: [AddDpiNavBarComponent, ZXingScannerModule, QRCodeComponent, CommonModule, FormsModule], // Dépendances du composant
  templateUrl: './rech-dpi-page.component.html', // Template HTML pour ce composant
  styleUrl: './rech-dpi-page.component.css' // Feuille de style CSS pour ce composant
})
export class RechDpiPageComponent implements OnInit {
  
  /**
   * Constructeur pour initialiser le composant avec les services nécessaires.
   * 
   * @param {Router} router - Service pour la gestion de la navigation entre les pages.
   * @param {RechercheService} rechercheService - Service pour la recherche des patients.
   * @param {PatientService} patientService - Service pour la gestion des données du patient.
   */
  constructor(private router: Router, private rechercheService: RechercheService, private patientService: PatientService) {}

  /** Contrôle l'état du scanner (activation/désactivation). */
  isScanning: boolean = false;
  /** Valeur par défaut à encoder dans le QR code (ici un exemple de NSS). */
  dataToEncode: string = '123';
  /** Données du QR code scanné. */
  qrData: string | null = null;
  /** Valeur saisie pour rechercher un patient. */
  searchValue: string = '';
  /** Tableau des patients récupérés. */
  patients: any[] = [];
  /** Liste filtrée des patients, utilisée pour afficher les résultats. */
  filteredPatientsList: any[] = [];

  /**
   * Bascule l'état du scanner (active ou désactive la fonctionnalité de scan).
   */
  toggleScanner(): void {
    this.isScanning = !this.isScanning;
  }

  /**
   * Ferme le scanner en le désactivant.
   */
  closeScanner(): void {
    this.isScanning = false;
  }

  /**
   * Gère l'événement de scan d'un code QR. Récupère les données du QR code et effectue une recherche.
   * 
   * @param {string} result - Données extraites du code QR scanné.
   */
  onCodeScanned(result: string): void {
    console.log('Code scanné:', result);
    this.searchValue = result; // Assignation des données du QR à la variable de recherche
    this.filter(); // Filtrer les patients en fonction de la valeur scannée
    this.isScanning = false; // Désactiver le scanner
  }

  /**
   * Redirige vers la page du patient en passant les informations du patient via le service.
   * 
   * @param {any} patient - L'objet représentant le patient sélectionné.
   */
  goToPatientPage(patient: any): void {
    this.patientService.setPatient(patient); // Stocker les données du patient dans le service
    this.router.navigate(['/Rech-dpi/Patient']); // Rediriger vers la page du patient
  }

  /**
   * Gère la sélection d'un fichier image contenant un QR code. Le code QR est extrait et utilisé pour rechercher un patient.
   * 
   * @param {Event} event - L'événement de sélection de fichier.
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;

          const context = canvas.getContext('2d');
          if (context) {
            context.drawImage(img, 0, 0, img.width, img.height);
            const imageData = context.getImageData(0, 0, img.width, img.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
              this.qrData = code.data; // Extraire les données du QR code
              this.searchValue = this.qrData; // Assigner la valeur extraite pour la recherche
              this.filter(); // Filtrer les patients avec la nouvelle valeur
            } else {
              this.qrData = 'QR Code non détecté.'; // Message d'erreur si QR code non détecté
            }
          }
        };
      };

      reader.readAsDataURL(file); // Lire l'image en tant qu'URL de données
    }
  }

  /**
   * Méthode exécutée au démarrage du composant. Récupère les données des patients via le service.
   * Cette méthode est appelée lors de l'initialisation du composant.
   */
  ngOnInit(): void {
    this.rechercheService.getData(this.searchValue).subscribe((data) => {
      this.patients = data; // Stocker les données des patients
      this.filteredPatientsList = [...this.patients]; // Initialiser la liste filtrée avec tous les patients
    });
  }

  /**
   * Filtre la liste des patients en fonction de la valeur saisie dans le champ de recherche.
   * Appelle le service pour rechercher les patients correspondants.
   */
  filter(): void {
    // Vérifier si la valeur saisie est vide
    if (!this.searchValue) {
      console.log("Aucune valeur NSS saisie");
      this.filteredPatientsList = []; // Réinitialiser la liste filtrée
      return;
    }

    console.log("NSS VALUE", this.searchValue);

    // Appeler le service pour rechercher les données
    this.rechercheService.getData(this.searchValue).subscribe(
      (response) => {
        console.log("Données reçues du backend :", response);

        // Le backend renvoie une seule structure avec les données du patient
        const patient = response;

        // Initialiser les listes avec le patient trouvé
        this.patients = [patient];
        this.filteredPatientsList = [...this.patients];
      },
      (error) => {
        console.error("Erreur lors de la recherche des patients : ", error);

        // Réinitialiser les listes en cas d'erreur
        this.patients = [];
        this.filteredPatientsList = [];
      }
    );
  }
}
