import { Component, OnInit } from '@angular/core';
import { DpiNavbarComponent } from "../../components/dpi-navbar/dpi-navbar.component";
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { Router } from '@angular/router';
import { ConsultationService } from '../../services/consultation.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-dpi-consultations-page',
  imports: [DpiNavbarComponent, EmptyNavbarComponent,CommonModule],
  templateUrl: './dpi-consultations-page.component.html',
  styleUrl: './dpi-consultations-page.component.css'
}) 
export class DpiConsultationsPageComponent implements OnInit{

  constructor(private router: Router,private consultationService: ConsultationService) {}

  goToMedecinPage(consultation: any){
    this.consultationService.setConsultation(consultation);
    this.router.navigate(['/Rech-dpi/Consultations/Medecin']);
  }
//-------------------------------------------integration-------------------------------------------------
  consultationList: any[] = []; 
  ngOnInit(): void {
      this.consultationService.getData().subscribe((data)=>{
        this.consultationList=data;
      })
  }
}
