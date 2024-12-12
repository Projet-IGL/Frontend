import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-add-dpi-nav-bar',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './add-dpi-nav-bar.component.html',
  styleUrl: './add-dpi-nav-bar.component.css'
})
export class AddDpiNavBarComponent {
  constructor(private router: Router) {}
  getButtonClasses(buttonType: string): string {
    const currentRoute = this.router.url;

    if (buttonType === 'dpi') {
      return currentRoute === '/add-dpi'
        ? 'bg-veryLightBlue '
        : 'bg-white';
    }

    else{
      return currentRoute === '/add-staff'
        ? 'bg-white'
        : 'bg-white';
    }

  }
  getButtonCaseStaff(buttonType: string): string {
    const currentRoute = this.router.url;

    if (buttonType === 'Staff') {
      return currentRoute === '/add-staff'
        ? 'bg-veryLightBlue '
        : 'bg-white';
    }

    else{
      return currentRoute === '/add-dpi'
        ? 'bg-white'
        : 'bg-white';
    }

  }
  goToLandingPage() {
    this.router.navigate(['/Landing-page']);
  }
  goToAddDpiPage() {
    this.router.navigate(['/add-dpi']);
  }
  goToAddStaffPage() {
    this.router.navigate(['/add-staff']);
  }
}
