import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddDpiPageComponent } from './pages/add-dpi-page/add-dpi-page.component';
import { AddStaffPageComponent } from './pages/add-staff-page/add-staff-page.component';
import { AjouterSoinPageComponent } from './pages/ajouter-soin-page/ajouter-soin-page.component';
import {AjouterConsultationComponent} from './components/ajouter-consultation/ajouter-consultation.component';
import { ProfilInfermierComponent } from './pages/profil-infermier/profil-infermier.component';
import {ProfilStaffComponent} from './components/profil-staff/profil-staff.component';
import {InfoPatientComponent} from './components/info-patient/info-patient.component';
import { ProfilMedecinComponent } from './pages/profil-medecin/profil-medecin.component';
import { ProfilPatientComponent } from './pages/profil-patient/profil-patient.component';


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
        path: 'ajouterSoin', 
        component: AjouterSoinPageComponent 
      },
     
      { 
        path: 'ajouterConsultation', 
        component: AjouterConsultationComponent 
      },

      { 
        path: 'profilInfermier', 
        component: ProfilInfermierComponent 
      },
    
      { 
        path: 'ProfilStaff', 
        component: ProfilStaffComponent 
      },

      { 
        path: 'profilMedecin', 
        component: ProfilMedecinComponent 
      },

      { 
        path: 'profilPatient', 
        component: ProfilPatientComponent 
      },

      { 
        path: 'infoPatient', 
        component: InfoPatientComponent 
      },
];
