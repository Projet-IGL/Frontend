import { Component, OnInit } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { OrdonnanceService } from '../../services/ordonnance.service';
import { ConsultationService } from '../../services/consultation.service';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-ordonnance-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent,CommonModule],
  templateUrl: './ordonnance-page.component.html',
  styleUrl: './ordonnance-page.component.css'
})
export class OrdonnancePageComponent implements OnInit {
  constructor(private ordonnanceService: OrdonnanceService,private consultationService: ConsultationService , private patientService : PatientService ,private authService : AuthService){}

  ordoList: any;
  consultation: any;
  numero_consultation :string = '' ;
  nss : string = '';
  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user && user.role === 'Medecin') {
       this.nss = this.patientService.getPatient().patient_data.nss;
       console.log(this.nss);

    }
    if (user && user.role === 'Patient') {
       this.nss = this.patientService.getPatient().data.nss;
       console.log(this.nss);

    }
    this.consultation = this.consultationService.getConsultation();
    this.numero_consultation=this.consultation.numero_consultation;
    this.ordonnanceService.getData(this.nss,this.numero_consultation).subscribe((data) => {
    this.ordoList = data;
    console.log(data);
    console.log(this.ordoList);
  });
  console.log('ordoooonance',this.ordoList);
  console.log('num cons',this.numero_consultation);
  }
}
