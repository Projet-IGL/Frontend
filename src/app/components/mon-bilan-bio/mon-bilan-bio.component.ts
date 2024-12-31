// MonBilanBioComponent.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BilanBioService } from '../../services/bilan-bio.service';
import { ConsultationService } from '../../services/consultation.service';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-mon-bilan-bio',
  imports: [FormsModule, CommonModule],
  templateUrl: './mon-bilan-bio.component.html',
  styleUrl: './mon-bilan-bio.component.css'
})
export class MonBilanBioComponent implements OnInit {
  user: any = null; // Informations utilisateur
  consultation: any = null; // Informations utilisateur
  glycemie: number | null = null;
  pression: number | null = null;
  cholesterol: number | null = null;
  graphImageUrl: string | null = null; // URL de l'image du graphique
  bilanDisponible: boolean = false; // Indicateur pour savoir si le bilan est disponible

  constructor(
    private bilanBioService: BilanBioService,
    private patientService: PatientService,
    private consultationService: ConsultationService
  ) {}

  ngOnInit() {
    this.consultation = this.consultationService.getConsultation();
    if (this.consultation) {
      console.log(this.consultation);
      this.fetchBilanData();
    }
  }

  fetchBilanData() {
    const nss = this.patientService.getPatient().patient_data.nss;
    const numeroConsultation = this.consultation.numcons;
    this.bilanBioService.getBilanBio(nss, numeroConsultation).subscribe(
      (data: any) => {
        this.glycemie = data.glycemie || null;
        this.pression = data.pression || null;
        this.cholesterol = data.cholesterol || null;
        this.graphImageUrl = data.graphImageUrl || null;
        this.bilanDisponible = true;
      },
      (error) => {
        console.error('Erreur lors de la récupération du bilan :', error);
        this.bilanDisponible = false;
      }
    );
  } 
}
