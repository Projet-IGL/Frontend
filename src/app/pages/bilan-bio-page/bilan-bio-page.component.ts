import { Component } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { BilanBioService } from '../../services/bilan-bio.service';
import { ConsultationService } from '../../services/consultation.service';
import { CommonModule } from '@angular/common';
import { MonBilanBioComponent } from '../../components/mon-bilan-bio/mon-bilan-bio.component';
@Component({
  selector: 'app-bilan-bio-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent,MonBilanBioComponent,CommonModule],
  templateUrl: './bilan-bio-page.component.html',
  styleUrl: './bilan-bio-page.component.css'
})
export class BilanBioPageComponent {
   
  
}
