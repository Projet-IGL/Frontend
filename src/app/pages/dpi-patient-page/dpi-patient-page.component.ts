import { Component, OnInit } from '@angular/core';
import { DpiNavbarComponent } from "../../components/dpi-navbar/dpi-navbar.component";
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-dpi-patient-page',
  imports: [DpiNavbarComponent, EmptyNavbarComponent],
  templateUrl: './dpi-patient-page.component.html',
  styleUrl: './dpi-patient-page.component.css'
})

export class DpiPatientPageComponent implements OnInit {
  patient: any;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patient = this.patientService.getPatient();
  }

}