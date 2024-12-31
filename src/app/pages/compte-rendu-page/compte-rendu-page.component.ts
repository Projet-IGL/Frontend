import { Component, OnInit } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { BilanRadiologiqueService } from '../../services/bilan-radiologique.service';
import { ConsultationService } from '../../services/consultation.service';
import { PatientService } from '../../services/patient.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compte-rendu-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent, CommonModule],
  templateUrl: './compte-rendu-page.component.html',
  styleUrl: './compte-rendu-page.component.css'
})
export class CompteRenduPageComponent implements OnInit{
  bilanRadio: any = null; // Pour stocker le bilan radiologique
  consultation: any;
  patient: any;

 
  constructor(
    private bilanRadiologiqueService: BilanRadiologiqueService,
    private consultationService: ConsultationService,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    // Obtenir la consultation en cours
    this.consultation = this.consultationService.getConsultation();
    this.patient = this.patientService.getPatient();

    if (this.consultation && this.patient) {
      const nss = this.patient.nss;
      const numerOConsultation = this.consultation.numcons;
  
      this.bilanRadiologiqueService.getBilanRadiologique(nss, numerOConsultation)
        .subscribe(
          (data) => {
            this.bilanRadio = data;
          },
          (error) => {
            console.error('Erreur lors de la récupération du bilan radiologique:', error);
          }
        );
    }
  }
}
