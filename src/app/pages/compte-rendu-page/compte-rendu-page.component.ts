import { Component, OnInit } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { ConsultationService } from '../../services/consultation.service';

@Component({
  selector: 'app-compte-rendu-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent],
  templateUrl: './compte-rendu-page.component.html',
  styleUrl: './compte-rendu-page.component.css'
})
export class CompteRenduPageComponent implements OnInit{
      constructor(private consultationService: ConsultationService){};
      consultation: any;
      ngOnInit(): void {
         this.consultation = this.consultationService.getConsultation();
    }
}
