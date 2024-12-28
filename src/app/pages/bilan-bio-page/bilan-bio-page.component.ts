import { Component } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { BilanBioService } from '../../services/bilan-bio.service';
import { ConsultationService } from '../../services/consultation.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-bilan-bio-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent,CommonModule],
  templateUrl: './bilan-bio-page.component.html',
  styleUrl: './bilan-bio-page.component.css'
})
export class BilanBioPageComponent {
   constructor(private bilanBioService: BilanBioService, private consultationService: ConsultationService){}
    bilanBioList: any[] = []; 
    consultation: any;
  ngOnInit(): void {
    this.consultation = this.consultationService.getConsultation();
    this.bilanBioService.getData().subscribe((data) => {
    this.bilanBioList = data; 
  });
  }
}
