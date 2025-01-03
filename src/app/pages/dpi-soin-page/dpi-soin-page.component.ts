import { Component, OnInit } from '@angular/core';
import { DpiNavbarComponent } from "../../components/dpi-navbar/dpi-navbar.component";
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { PatientService } from '../../services/patient.service';
import { SoinService } from '../../services/soin.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

/**
 * Composant pour afficher les soins d'un patient dans le Dossier Patient Informatisé (DPI).
 * Ce composant récupère et affiche la liste des soins du patient.
 */
@Component({
  selector: 'app-dpi-soin-page', // Sélecteur du composant
  imports: [
    DpiNavbarComponent, // Composant de la barre de navigation DPI
    EmptyNavbarComponent, // Composant pour la barre de navigation vide
    CommonModule // Module Angular commun
  ],
  templateUrl: './dpi-soin-page.component.html', // Template HTML pour le composant
  styleUrl: './dpi-soin-page.component.css' // Feuille de style CSS pour le composant
})
export class DpiSoinPageComponent implements OnInit {

  /** 
   * Le service pour récupérer et gérer les soins des patients.
   * @type {SoinService} 
   */
  constructor(private soinService: SoinService, private patientService: PatientService, private authService: AuthService) {}

  /**
   * Objet représentant les informations du patient.
   * @type {any}
   */
  patient: any;

  /**
   * Objet représentant les informations de l'utilisateur connecté (médecin ou patient).
   * @type {any}
   */
  user: any;

  /** 
   * Liste des soins du patient.
   * @type {any[]}
   */
  soinsList: any[] = [];

  /** 
   * Numéro de sécurité sociale (NSS) du patient.
   * @type {string}
   */
  nss: string = '';

  /**
   * Méthode d'initialisation du composant.
   * Cette méthode récupère les données du patient et les soins associés.
   * Elle est exécutée lors de l'initialisation du composant.
   */
  ngOnInit(): void {
    // Récupérer l'utilisateur connecté via le service AuthService
    const user = this.authService.getUser();
    
    // Récupérer le NSS du patient en fonction du rôle de l'utilisateur
    if (user && user.role === 'Medecin') {
      this.nss = this.patientService.getPatient().patient_data.nss; // Médecin : accès aux données du patient
    }
    
    if (user && user.role === 'Patient') {
      this.nss = this.patientService.getPatient().data.nss; // Patient : accès aux données du patient
    }

    // Récupérer la liste des soins du patient à partir du service `SoinService`
    this.soinService.getData(this.nss).subscribe((data) => {
      this.soinsList = data; // Stocker la liste des soins dans la variable soinsList
    });
  }
}
