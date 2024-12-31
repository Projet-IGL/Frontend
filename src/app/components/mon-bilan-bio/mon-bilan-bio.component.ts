// MonBilanBioComponent.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BilanBioService } from '../../services/bilan-bio.service';
import { ConsultationService } from '../../services/consultation.service';
import { PatientService } from '../../services/patient.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-mon-bilan-bio',
  imports: [FormsModule, CommonModule],
  templateUrl: './mon-bilan-bio.component.html',
  styleUrl: './mon-bilan-bio.component.css'
})
export class MonBilanBioComponent implements OnInit {
  user: any = null; // Informations utilisateur
  patient: any;
  consultation: any = null; // Informations utilisateur
  glycemie: number | null = null;
  pression: number | null = null;
  cholesterol: number | null = null;
  graphImageUrl: string | null = null; // URL de l'image du graphique
  bilanDisponible: boolean = false; // Indicateur pour savoir si le bilan est disponible
  numcons :string = '' ;
  nss : string = '';

  constructor(
    private bilanBioService: BilanBioService,
    private patientService: PatientService,
    private authService : AuthService,
    private consultationService: ConsultationService
  ) {}

  ngOnInit() {
    const user = this.authService.getUser();
    // Obtenir la consultation en cours
    this.consultation = this.consultationService.getConsultation();
    this.numcons=this.consultation.numero_consultation;
    this.patient = this.patientService.getPatient();
    if (user && user.role === 'Medecin') {
      this.nss = this.patientService.getPatient().patient_data.nss;
      console.log(this.nss);

   }
   if (user && user.role === 'Patient') {
      this.nss = this.patientService.getPatient().data.nss;
      console.log(this.nss);

   }    if (this.consultation) {
      console.log(this.consultation);
      this.fetchBilanData();
    }
  }



  fetchBilanData() {
    
    this.bilanBioService.getBilanBio(this.nss,this.numcons).subscribe(
      (data: any) => {
        this.glycemie =  data.bilan_biologique.glycemie || null;
        this.pression = data.bilan_biologique.pression_arterielle || null;
        this.cholesterol = data.bilan_biologique.cholesterol || null;
        this.graphImageUrl = 'http://127.0.0.1:8000' + data.bilan_biologique.graphe || null;
        this.bilanDisponible = true;
        console.log(data);
      },
      (error) => {
        console.error('Erreur lors de la récupération du bilan :', error);
        this.bilanDisponible = false;
      }
    );
  } 
}