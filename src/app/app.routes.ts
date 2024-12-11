import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';

export const routes: Routes = [
  { 
    path: '',
    component: LandingPageComponent, // Afficher la LandingPageComponent par défaut
    pathMatch: 'full' 
  },
  
  { 
    path: 'Landing-page', // Lien vers LandingPage (si vous en avez besoin explicitement)
    component: LandingPageComponent
  },
  
  { 
    path: 'login', 
    component: LoginFormComponent 
  }
];
