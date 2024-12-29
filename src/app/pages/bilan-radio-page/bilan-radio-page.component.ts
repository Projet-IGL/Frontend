import { Component } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { BilanRadiologiqueService } from '../../services/bilan-radiologique.service';
import { ConsultationService } from '../../services/consultation.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-bilan-radio-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent,CommonModule],
  templateUrl: './bilan-radio-page.component.html',
  styleUrl: './bilan-radio-page.component.css'
})
export class BilanRadioPageComponent {
   constructor(private bilanRadiologiqueService: BilanRadiologiqueService, private consultationService: ConsultationService){}
    bilanRadioList: any[] = []; 
    consultation: any;
  ngOnInit(): void {
    this.consultation = this.consultationService.getConsultation();
    this.bilanRadiologiqueService.getData().subscribe((data) => {
    this.bilanRadioList = data; 
  });
  }
}
