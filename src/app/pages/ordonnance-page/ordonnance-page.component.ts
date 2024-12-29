import { Component, OnInit } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { OrdonnanceService } from '../../services/ordonnance.service';
import { ConsultationService } from '../../services/consultation.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ordonnance-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent,CommonModule],
  templateUrl: './ordonnance-page.component.html',
  styleUrl: './ordonnance-page.component.css'
})
export class OrdonnancePageComponent implements OnInit {
  constructor(private ordonnanceService: OrdonnanceService,private consultationService: ConsultationService){}

  ordoList: any[] = []; 
  consultation: any;
  ngOnInit(): void {
    this.consultation = this.consultationService.getConsultation();
    this.ordonnanceService.getData().subscribe((data) => {
    this.ordoList = data; 
  });
  }
}
