import { Component, OnInit } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { ConsultationService } from '../../services/consultation.service';
@Component({
  selector: 'app-consultation-medecin-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent],
  templateUrl: './consultation-medecin-page.component.html',
  styleUrl: './consultation-medecin-page.component.css'
})
export class ConsultationMedecinPageComponent implements OnInit{
      constructor(private consultationService: ConsultationService){};
      consultation: any;
      ngOnInit(): void {
         this.consultation = this.consultationService.getConsultation();
         console.log(this.consultation);
    }

}
