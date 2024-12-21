import { Component } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";

@Component({
  selector: 'app-bilan-bio-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent],
  templateUrl: './bilan-bio-page.component.html',
  styleUrl: './bilan-bio-page.component.css'
})
export class BilanBioPageComponent {

}
