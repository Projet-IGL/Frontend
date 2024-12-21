import { Component } from '@angular/core';
import { DpiNavbarComponent } from "../../components/dpi-navbar/dpi-navbar.component";
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dpi-consultations-page',
  imports: [DpiNavbarComponent, EmptyNavbarComponent],
  templateUrl: './dpi-consultations-page.component.html',
  styleUrl: './dpi-consultations-page.component.css'
})
export class DpiConsultationsPageComponent {
  constructor(private router: Router) {}
  goToMedecinPage(){
    this.router.navigate(['/Rech-dpi/Consultations/Medecin']);
  }
}
