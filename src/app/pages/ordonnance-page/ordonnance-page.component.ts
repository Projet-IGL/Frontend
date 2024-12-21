import { Component } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";

@Component({
  selector: 'app-ordonnance-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent],
  templateUrl: './ordonnance-page.component.html',
  styleUrl: './ordonnance-page.component.css'
})
export class OrdonnancePageComponent {

}
