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

@Component({
  selector: 'app-rech-dpi-page',
  imports: [AddDpiNavBarComponent, ZXingScannerModule,QRCodeComponent, CommonModule,FormsModule],
  templateUrl: './rech-dpi-page.component.html',
  styleUrl: './rech-dpi-page.component.css'
})


export class RechDpiPageComponent implements OnInit {

  constructor(private router: Router,private rechercheService: RechercheService,private patientService: PatientService) {}

  isScanning: boolean = false; // Contrôle l'état du scanner
  dataToEncode: string = '123';
 
  toggleScanner(): void {
    this.isScanning = !this.isScanning; // Bascule l'état du scanner
  }
  closeScanner(): void {
    this.isScanning = false;
  }
  onCodeScanned(result: string): void {
    console.log('Code scanné:', result);
    this.searchValue=result;
    this.filter();
    this.isScanning = false;
}

goToPatientPage(patient: any){
  this.patientService.setPatient(patient); // Stocker les données dans le service
  this.router.navigate(['/Rech-dpi/Patient']);
}

//-------------------------------------------QR code (photo)------------------------------------------------------
qrData: string | null = null;
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
            this.qrData = code.data; // Données du QR Code
            this.searchValue=this.qrData;
            this.filter();
          } else {
            this.qrData = 'QR Code non détecté.';
          }
        }
      };
    };

    reader.readAsDataURL(file);
  }
}
//---------------------------------------------partie integration-----------------------------------------

searchValue: string = ''; // Propriété liée à l'input
patients: any[] = []; // Tableau pour stocker les données des patients
filteredPatientsList: any[] = []; // Liste filtrée des patients

ngOnInit(): void {
  // Récupérer les données des patients
  this.rechercheService.getData().subscribe((data) => {
    this.patients = data; // Stocker les données des patients
    this.filteredPatientsList = [...this.patients]; // Initialiser la liste filtrée avec tous les patients
  });
}

filter(): void {
  // Filtrer les patients selon la valeur saisie dans l'input
  this.filteredPatientsList = this.patients.filter(patient =>patient.patient_data.nss.includes(this.searchValue) );
}

}