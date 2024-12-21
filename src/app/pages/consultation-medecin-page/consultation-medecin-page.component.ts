import { Component } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";

@Component({
  selector: 'app-consultation-medecin-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent],
  templateUrl: './consultation-medecin-page.component.html',
  styleUrl: './consultation-medecin-page.component.css'
})
export class ConsultationMedecinPageComponent {

}
