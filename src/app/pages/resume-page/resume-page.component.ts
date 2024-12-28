import { Component, OnInit } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { ConsultationService } from '../../services/consultation.service';

@Component({
  selector: 'app-resume-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent implements OnInit{
      constructor(private consultationService: ConsultationService){};
      consultation: any;
      ngOnInit(): void {
         this.consultation = this.consultationService.getConsultation();
    }
}