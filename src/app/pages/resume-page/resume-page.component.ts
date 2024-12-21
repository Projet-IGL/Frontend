import { Component } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";

@Component({
  selector: 'app-resume-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {

}
