import { Component, OnInit } from '@angular/core';
import { DpiNavbarComponent } from "../../components/dpi-navbar/dpi-navbar.component";
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { PatientService } from '../../services/patient.service';

/**
 * Composant pour afficher les informations du patient dans le Dossier Patient Informatisé (DPI).
 * Ce composant récupère et affiche les données du patient.
 */
@Component({
  selector: 'app-dpi-patient-page', // Sélecteur de ce composant
  imports: [
    DpiNavbarComponent, // Composant de la barre de navigation DPI
    EmptyNavbarComponent // Composant pour la barre de navigation vide
  ],
  templateUrl: './dpi-patient-page.component.html', // Template HTML pour le composant
  styleUrl: './dpi-patient-page.component.css' // Feuille de style CSS pour le composant
})
export class DpiPatientPageComponent implements OnInit {

  /** 
   * Objet représentant les informations du patient.
   * @type {any} 
   */
  patient: any;

  /**
   * Constructeur du composant.
   * @param patientService Service pour récupérer les informations du patient.
   */
  constructor(private patientService: PatientService) {}

  /**
   * Méthode d'initialisation du composant.
   * Récupère les données du patient via le service `PatientService`.
   */
  ngOnInit(): void {
    // Récupère les informations du patient à partir du service
    this.patient = this.patientService.getPatient();
  }

}
