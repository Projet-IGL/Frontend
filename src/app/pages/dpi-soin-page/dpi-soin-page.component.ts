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
  this.patient = this.patientService.getPatient();
  this.soinService.setPatient(this.patient);
  // Récupérer les données des patients
  this.soinService.getData().subscribe((data) => {
    this.soinsList = data; // Stocker les données des patients
  });
}
}
