import { Component, OnInit } from '@angular/core';
import { DpiNavbarComponent } from "../../components/dpi-navbar/dpi-navbar.component";
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { Router } from '@angular/router';
import { ConsultationService } from '../../services/consultation.service';
import { CommonModule } from '@angular/common';
import { AddOrdonnanceComponent } from '../../components/add-ordonnance/add-ordonnance.component';
import { AddBilanComponent } from '../../components/add-bilan/add-bilan.component';
import { AjouterConsultationComponent } from '../../components/ajouter-consultation/ajouter-consultation.component';
import { AuthService } from '../../services/auth.service'; // Importez AuthService pour récupérer l'utilisateur
import { PatientService } from '../../services/patient.service';

/**
 * Composant pour afficher la page de consultations du DPI (Dossier Patient Informatisé).
 * Permet de gérer l'affichage et les interactions avec les consultations d'un patient.
 */
@Component({
  selector: 'app-dpi-consultations-page',
  imports: [
    DpiNavbarComponent, // Composant de la barre de navigation DPI
    EmptyNavbarComponent, // Composant pour la barre de navigation vide
    CommonModule, // Module de base Angular pour des fonctionnalités communes
    AjouterConsultationComponent, // Composant pour ajouter une consultation
    AddOrdonnanceComponent, // Composant pour ajouter une ordonnance
    AddBilanComponent // Composant pour ajouter un bilan
  ],
  templateUrl: './dpi-consultations-page.component.html', // Template HTML pour le composant
  styleUrl: './dpi-consultations-page.component.css' // Feuille de style CSS pour le composant
})
export class DpiConsultationsPageComponent implements OnInit {

  /** 
   * Constructeur du composant. 
   * @param router Service pour la navigation.
   * @param consultationService Service pour gérer les consultations.
   * @param patientService Service pour récupérer les informations du patient.
   * @param authService Service pour récupérer les informations de l'utilisateur authentifié.
   */
  constructor(
    private router: Router,
    private consultationService: ConsultationService,
    private patientService: PatientService,
    private authService: AuthService
  ) {}

  /** Variable pour contrôler la visibilité du pop-out pour le bilan biologique. */
  popOutVisible = false; 

  /** Variable pour contrôler la visibilité du pop-out pour l'ordonnance. */
  popOutVisible1 = false;

  /** Variable pour contrôler la visibilité du pop-out pour la consultation. */
  popOutVisible2 = false;

  /** Données de la consultation actuelle. */
  consultationData: any;

  /** Liste des consultations à afficher. */
  consultationList: any[] = [];

  /** Indicateur pour savoir si l'utilisateur est un médecin. */
  isMedecin: boolean = false;

  /** Le numéro de sécurité sociale (NSS) du patient. */
  nss: string = '';

  /**
   * Méthode pour naviguer vers la page du médecin et afficher les détails de la consultation.
   * @param consultation Données de la consultation à afficher.
   */
  goToMedecinPage(consultation: any) {
    this.consultationService.setConsultation(consultation);
    this.router.navigate(['/Rech-dpi/Consultations/Medecin']);
  }

  /**
   * Met à jour la visibilité du pop-out pour le bilan biologique.
   * @param visible Indique si le pop-out doit être visible ou non.
   */
  updatePopOutVisibility(visible: boolean): void {
    this.popOutVisible = visible;
    console.log("visible", this.popOutVisible);
  }

  /**
   * Met à jour la visibilité du pop-out pour l'ordonnance.
   * @param data Indique si le pop-out pour l'ordonnance doit être visible ou non.
   */
  updatePopOutVisibility1(data: boolean): void {
    this.popOutVisible1 = data;
    console.log("visible1", this.popOutVisible1);
  }

  /**
   * Met à jour la visibilité du pop-out pour la consultation.
   * @param visible Indique si le pop-out pour la consultation doit être visible ou non.
   */
  updatePopOutVisibility2(visible: boolean): void {
    this.popOutVisible2 = visible;
    console.log("visible2", this.popOutVisible2);
  }

  /**
   * Ouvre un autre pop-out en fonction de l'action de l'événement.
   * @param event Données de l'événement contenant l'action à réaliser et les données de la consultation.
   */
  openOtherPopout(event: any): void {
    this.consultationData = event.consultationData;
    console.log('consu:', this.consultationList);

    // Si l'action est "ordonnance", ouvre le pop-out pour ajouter une ordonnance
    if (event.action === 'ordonnance') {
      this.popOutVisible1 = true;
    }
    // Si l'action concerne un bilan biologique ou radiologique, ouvre le pop-out pour ajouter un bilan
    else if (event.action === 'bilan biologique,bilan radiologique' || event.action === 'Bilan biologique' || event.action === 'Bilan radiologique') {
      this.popOutVisible = true;
    }
  }

  /**
   * Méthode d'initialisation du composant.
   * Récupère les informations sur le patient et les consultations en fonction du rôle de l'utilisateur.
   * Appelle le service pour obtenir la liste des consultations à afficher.
   */
  ngOnInit(): void {
    const user = this.authService.getUser();

    // Vérifie si l'utilisateur est un médecin et récupère le NSS du patient
    if (user && user.role === 'Medecin') {
      this.isMedecin = true;
      this.nss = this.patientService.getPatient().patient_data.nss;
    }

    // Si l'utilisateur est un patient, récupère son NSS
    if (user && user.role === 'Patient') {
      this.nss = this.patientService.getPatient().data.nss;
    }

    // Appeler le service de consultation pour obtenir les données selon le NSS du patient
    this.consultationService.getData(this.nss).subscribe((data) => {
      this.consultationList = data; // Stocke les consultations dans la liste
      console.log(this.consultationList); // Affiche les consultations pour débogage
    });
  }
}
