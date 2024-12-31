import { Component, OnInit } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { BilanRadiologiqueService } from '../../services/bilan-radiologique.service';
import { ConsultationService } from '../../services/consultation.service';
import { PatientService } from '../../services/patient.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-bilan-radio-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent, CommonModule],
  templateUrl: './bilan-radio-page.component.html',
  styleUrls: ['./bilan-radio-page.component.css']
})
export class BilanRadioPageComponent implements OnInit {
  bilanRadio: any = null; // Pour stocker le bilan radiologique
  consultation: any;
  patient: any;
  numcons :string = '' ;
  nss : string = '';


  constructor(
    private bilanRadiologiqueService: BilanRadiologiqueService,
    private consultationService: ConsultationService,
    private patientService: PatientService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
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

   }

    if (this.consultation && this.patient) {
      
  
      this.bilanRadiologiqueService.getBilanRadiologique(this.nss,this.numcons)
        .subscribe(
          (data) => {
            this.bilanRadio = data;
            console.log(this.bilanRadio)
          },
          (error) => {
            console.error('Erreur lors de la récupération du bilan radiologique:', error);
          }
        );
    }
  }
}