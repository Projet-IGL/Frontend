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
import { AjouterSoinPageComponent } from './pages/ajouter-soin-page/ajouter-soin-page.component';
import { AjouterConsultationComponent } from './components/ajouter-consultation/ajouter-consultation.component';
import { ProfilInfermierComponent } from './pages/profil-infermier/profil-infermier.component';
import { ProfilStaffComponent } from './components/profil-staff/profil-staff.component';
import { ProfilMedecinComponent } from './pages/profil-medecin/profil-medecin.component';
import { ProfilPatientComponent } from './pages/profil-patient/profil-patient.component';
import { InfoPatientComponent } from './components/info-patient/info-patient.component';
import { ProfilAdminComponent } from './pages/profil-admin/profil-admin.component';
import { ProfilLaborantinComponent } from './pages/profil-laborantin/profil-laborantin.component';
import { ProfilRadiologueComponent } from './pages/profil-radiologue/profil-radiologue.component';
import { AjouterBilanRadiologiqueComponent } from './pages/ajouter-bilan-radiologique/ajouter-bilan-radiologique.component';
import { AjouterBilanBiologiqueComponent } from './pages/ajouter-bilan-biologique/ajouter-bilan-biologique.component';
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
        path: 'profilAdmin', 
        component: ProfilAdminComponent ,
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
      {
        path: 'ajouterSoin', 
        component: AjouterSoinPageComponent 
      },
      {
        path: 'ajouterBilanRadio', 
        component: AjouterBilanRadiologiqueComponent 
      },
      {
        path: 'ajouterBilanBio', 
        component: AjouterBilanBiologiqueComponent 
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
        path: 'profilLaborantin', 
        component: ProfilLaborantinComponent 
      },
      { 
        path: 'profilRadiologue', 
        component: ProfilRadiologueComponent 
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
