import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddDpiPageComponent } from './pages/add-dpi-page/add-dpi-page.component';
import { AddStaffPageComponent } from './pages/add-staff-page/add-staff-page.component';
import { RechDpiPageComponent } from './pages/rech-dpi-page/rech-dpi-page.component';
import { DpiPatientPageComponent } from './pages/dpi-patient-page/dpi-patient-page.component';
import { DpiConsultationsPageComponent } from './pages/dpi-consultations-page/dpi-consultations-page.component';
import { DpiSoinPageComponent } from './pages/dpi-soin-page/dpi-soin-page.component';
import { ConsultationMedecinPageComponent } from './pages/consultation-medecin-page/consultation-medecin-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { OrdonnancePageComponent } from './pages/ordonnance-page/ordonnance-page.component';
import { BilanRadioPageComponent } from './pages/bilan-radio-page/bilan-radio-page.component';
import { BilanBioPageComponent } from './pages/bilan-bio-page/bilan-bio-page.component';
import { CompteRenduPageComponent } from './pages/compte-rendu-page/compte-rendu-page.component';
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
      { 
        path: 'Rech-dpi', 
        component: RechDpiPageComponent ,
        pathMatch: 'full' 
      },
      {
        path: 'Rech-dpi/Patient',
        component: DpiPatientPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'Rech-dpi/Consultations',
        component: DpiConsultationsPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'Rech-dpi/Soins',
        component: DpiSoinPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'Rech-dpi/Consultations/Medecin',
        component: ConsultationMedecinPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'Rech-dpi/Consultations/Resume',
        component: ResumePageComponent,
        pathMatch: 'full'
      },
      {
        path: 'Rech-dpi/Consultations/Ordonnance',
        component: OrdonnancePageComponent,
        pathMatch: 'full'
      },
      {
        path: 'Rech-dpi/Consultations/Bilan-Radiologique',
        component: BilanRadioPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'Rech-dpi/Consultations/Bilan-Biologique',
        component: BilanBioPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'Rech-dpi/Consultations/Compte-Rendu',
        component: CompteRenduPageComponent,
        pathMatch: 'full'
      },
];
