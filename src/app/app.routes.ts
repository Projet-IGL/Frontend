import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddDpiPageComponent } from './pages/add-dpi-page/add-dpi-page.component';
import { AddStaffPageComponent } from './pages/add-staff-page/add-staff-page.component';
export const routes: Routes = [
    { 
        path: '',
        component: LandingPageComponent, // Afficher la LandingPageComponent par défaut
        pathMatch: 'full' 
      },
      
      { 
        path: 'Landing-page', // Lien vers LandingPage (si vous en avez besoin explicitement)
        component: LandingPageComponent,
        pathMatch: 'full' 
      },
      
      { 
        path: 'login', 
        component: LoginPageComponent,
        pathMatch: 'full' 
      },
      { 
        path: 'add-dpi',
        component: AddDpiPageComponent ,
        pathMatch: 'full' 
      },
      { 
        path: 'add-staff', 
        component: AddStaffPageComponent ,
        pathMatch: 'full' 
      },
];
