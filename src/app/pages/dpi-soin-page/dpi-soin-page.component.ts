import { Component, OnInit } from '@angular/core';
import { DpiNavbarComponent } from "../../components/dpi-navbar/dpi-navbar.component";
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { PatientService } from '../../services/patient.service';
import { SoinService } from '../../services/soin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dpi-soin-page',
  imports: [DpiNavbarComponent, EmptyNavbarComponent,CommonModule],
  templateUrl: './dpi-soin-page.component.html',
  styleUrl: './dpi-soin-page.component.css'
})
export class DpiSoinPageComponent implements OnInit {

  constructor(private soinService: SoinService,private patientService: PatientService){}
  patient: any ;

  soinsList: any[] = [];

ngOnInit(): void {
  const nss = this.patientService.getPatient().patient_data.nss;
  this.soinService.setPatient(this.patient);
  // Récupérer les données des patients
  this.soinService.getData(nss).subscribe((data) => {
    this.soinsList = data; // Stocker les données des patients
  });
}
/*consultationList: any[] = [];  // Liste des consultations à afficher
//-------------------------------------------integration-------------------------------------------------
ngOnInit(): void {
  // Récupérer le NSS du patient depuis le service patient
  const nss = this.patientService.getPatient().patient_data.nss;

  // Appeler leservice pour obtenir les consultations en fonction du NSS
  this.consultationService.getData(nss).subscribe((data) => {
    this.consultationList = data;  // Stocker les consultations dans le tableau
    console.log(this.consultationList);  // Afficher la liste des consultations dans la console pour débogage
  });
}*/
}
