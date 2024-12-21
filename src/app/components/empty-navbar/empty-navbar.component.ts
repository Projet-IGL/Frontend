import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-navbar',
  imports: [],
  templateUrl: './empty-navbar.component.html',
  styleUrl: './empty-navbar.component.css'
})
export class EmptyNavbarComponent {
  constructor(private router: Router) {}
      goToLandingPage(){
      this.router.navigate(['/Landing-page']);
    }
    goToRecherchePage(){
      this.router.navigate(['/Rech-dpi']);
    }
}
