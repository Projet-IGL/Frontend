import { Component } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";

@Component({
  selector: 'app-bilan-radio-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent],
  templateUrl: './bilan-radio-page.component.html',
  styleUrl: './bilan-radio-page.component.css'
})
export class BilanRadioPageComponent {

}
