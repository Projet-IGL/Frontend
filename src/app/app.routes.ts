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
import { medecinGuard } from './Guard/medecin.guard';
import { adminGuard } from './Guard/admin.guard';
import { patientMedecinGuard } from './Guard/patient-medecin.guard';
import { infermierGuard } from './Guard/infermier.guard';
import { radiologueGuard } from './Guard/radiologue.guard';
import { laborantinGuard } from './Guard/laborantin.guard';
import { patientGuard } from './Guard/patient.guard';
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
        pathMatch: 'full' ,
        canActivate: [medecinGuard]
      },
      { 
        path: 'add-staff', 
        component: AddStaffPageComponent ,
        pathMatch: 'full' ,
        canActivate: [adminGuard]
      },
      { 
        path: 'profilAdmin', 
        component: ProfilAdminComponent ,
        pathMatch: 'full', 
        canActivate: [adminGuard]
      },
      { 
        path: 'Rech-dpi', 
        component: RechDpiPageComponent ,
        pathMatch: 'full' ,
        canActivate: [medecinGuard]
      },
      {
        path: 'Rech-dpi/Patient',
        component: DpiPatientPageComponent,
        pathMatch: 'full',
        canActivate: [medecinGuard]
      },
      {
        path: 'Rech-dpi/Consultations',
        component: DpiConsultationsPageComponent,
        pathMatch: 'full',
        canActivate: [patientMedecinGuard]
      },
      {
        path: 'Rech-dpi/Soins',
        component: DpiSoinPageComponent,
        pathMatch: 'full',
        canActivate: [patientMedecinGuard]
      },
      {
        path: 'Rech-dpi/Consultations/Medecin',
        component: ConsultationMedecinPageComponent,
        pathMatch: 'full',
        canActivate: [patientMedecinGuard]
      },
      {
        path: 'Rech-dpi/Consultations/Resume',
        component: ResumePageComponent,
        pathMatch: 'full',
        canActivate: [patientMedecinGuard]
      },
      {
        path: 'Rech-dpi/Consultations/Ordonnance',
        component: OrdonnancePageComponent,
        pathMatch: 'full',
        canActivate: [patientMedecinGuard]
      },
      {
        path: 'Rech-dpi/Consultations/Bilan-Radiologique',
        component: BilanRadioPageComponent,
        pathMatch: 'full',
        canActivate: [patientMedecinGuard]
      },
      {
        path: 'Rech-dpi/Consultations/Bilan-Biologique',
        component: BilanBioPageComponent,
        pathMatch: 'full',
        canActivate: [patientMedecinGuard]
      },
      {
        path: 'Rech-dpi/Consultations/Compte-Rendu',
        component: CompteRenduPageComponent,
        pathMatch: 'full',
        canActivate: [patientMedecinGuard]
      },
      {
        path: 'ajouterSoin', 
        component: AjouterSoinPageComponent, 
        canActivate: [infermierGuard]
      },
      {
        path: 'ajouterBilanRadio', 
        component: AjouterBilanRadiologiqueComponent ,
        canActivate: [radiologueGuard]
      },
      {
        path: 'ajouterBilanBio', 
        component: AjouterBilanBiologiqueComponent,
        canActivate : [laborantinGuard]
      },
     
     
      { 
        path: 'ajouterConsultation', 
        component: AjouterConsultationComponent, 
        canActivate : [medecinGuard]
      },

      { 
        path: 'profilInfermier', 
        component: ProfilInfermierComponent ,
        canActivate: [infermierGuard]
      },
      { 
        path: 'profilLaborantin', 
        component: ProfilLaborantinComponent ,
        canActivate: [laborantinGuard]
      },
      { 
        path: 'profilRadiologue', 
        component: ProfilRadiologueComponent ,
        canActivate : [radiologueGuard]
      },
    
      { 
        path: 'ProfilStaff', 
        component: ProfilStaffComponent 
      },

      { 
        path: 'profilMedecin', 
        component: ProfilMedecinComponent ,
        canActivate: [medecinGuard]
      },

      { 
        path: 'profilPatient', 
        component: ProfilPatientComponent ,
        canActivate: [patientGuard]
      },

      { 
        path: 'infoPatient', 
        component: InfoPatientComponent,   
      },
];
