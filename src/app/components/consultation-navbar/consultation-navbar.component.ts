import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-consultation-navbar',
  imports: [CommonModule],
  templateUrl: './consultation-navbar.component.html',
  styleUrl: './consultation-navbar.component.css'
})
export class ConsultationNavbarComponent {
     constructor(private router: Router) {}
         
         getButtonClass(page: string): string {
          const currentRoute = this.router.url;
          return currentRoute.includes(`/Rech-dpi/Consultations/${page}`)
            ? 'bg-violet'
            : 'bg-transparent';
        }
        
         goToMedecinPage() {
           this.router.navigate(['/Rech-dpi/Consultations/Medecin']);
         }
         goToResumePage() {
           this.router.navigate(['/Rech-dpi/Consultations/Resume']);
         }
         goToOrdonnancePage() {
           this.router.navigate(['/Rech-dpi/Consultations/Ordonnance']);
         }
         goToBilanRadioPage(){
          this.router.navigate(['/Rech-dpi/Consultations/Bilan-Radiologique']);
         }
         goToBilanBioPage(){
          this.router.navigate(['/Rech-dpi/Consultations/Bilan-Biologique']);
         }
         goToCompteRenduPage(){
          this.router.navigate(['/Rech-dpi/Consultations/Compte-Rendu']);
         }
         goToConsultationPage(){
          this.router.navigate(['/Rech-dpi/Consultations']);
         }

         menuOpen: boolean = false; // État initial du menu

         toggleMenu(): void {
            this.menuOpen = !this.menuOpen; // Inverse l'état du menu
         }
}
