import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-dpi-navbar',
  imports: [CommonModule],
  templateUrl: './dpi-navbar.component.html',
  styleUrl: './dpi-navbar.component.css' 
})
export class DpiNavbarComponent {

   constructor(private router: Router) {}
    getButtonClassesSoin(buttonType: string): string {
      const currentRoute = this.router.url;
  
      if (buttonType === 'Soin') {
        return currentRoute === '/Rech-dpi/Soins'
          ? 'bg-violet '
          : 'bg-transparent';
      }
  
      else{
        return currentRoute === '/Rech-dpi/Consultations'
          ? 'bg-white'
          : 'bg-transparent';
      }
  
    }
    getButtonCaseConsult(buttonType: string): string {
      const currentRoute = this.router.url;
  
      if (buttonType === 'Consultation') {
        return currentRoute === '/Rech-dpi/Consultations'
          ? 'bg-violet '
          : 'bg-transparent';
      }
  
      else{
        return currentRoute === '/Rech-dpi/Soins'
          ? 'bg-white'
          : 'bg-transparent';
      }
  
    }
    getButtonCasePatient(buttonType: string): string {
      const currentRoute = this.router.url;
  
      if (buttonType === 'Patient') {
        return currentRoute === '/Rech-dpi/Patient'
          ? 'bg-violet '
          : 'bg-transparent';
      }
  
      else{
        return currentRoute === '/Rech-dpi/Soins'
          ? 'bg-white'
          : 'bg-transparent';
      }
   
    }
    goToPatientPage() {
      this.router.navigate(['/Rech-dpi/Patient']);
    }
    goToConsultationPage() {
      this.router.navigate(['/Rech-dpi/Consultations']);
    }
    goToSoinPage() { 
      this.router.navigate(['/Rech-dpi/Soins']);
    }
    menuOpen: boolean = false; // État initial du menu

         toggleMenu(): void {
            this.menuOpen = !this.menuOpen; // Inverse l'état du menu
         }
}
