import { Component, OnInit } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { BilanRadiologiqueService } from '../../services/bilan-radiologique.service';
import { ConsultationService } from '../../services/consultation.service';
import { PatientService } from '../../services/patient.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

/**
 * Composant pour afficher la page de compte rendu radiologique.
 */
@Component({
  selector: 'app-compte-rendu-page',
  imports: [
    EmptyNavbarComponent, // Composant pour afficher une barre de navigation vide.
    ConsultationNavbarComponent, // Composant pour afficher la barre de navigation des consultations.
    CommonModule // Module Angular pour des directives communes.
  ],
  templateUrl: './compte-rendu-page.component.html', // Template HTML pour le composant.
  styleUrl: './compte-rendu-page.component.css' // Feuille de style CSS pour le composant.
})
export class CompteRenduPageComponent implements OnInit {
  /** Le bilan radiologique du patient. */
  bilanRadio: any = null;

  /** La consultation en cours. */
  consultation: any;

  /** Le patient concerné par la consultation. */
  patient: any;

  /** Le numéro de consultation. */
  numcons: string = '';

  /** Le numéro de sécurité sociale (NSS) du patient. */
  nss: string = '';

  /**
   * Constructeur du composant.
   * @param bilanRadiologiqueService Service pour récupérer les bilans radiologiques.
   * @param consultationService Service pour gérer les consultations.
   * @param patientService Service pour gérer les informations du patient.
   * @param authService Service pour gérer l'authentification de l'utilisateur.
   */
  constructor(
    private bilanRadiologiqueService: BilanRadiologiqueService,
    private consultationService: ConsultationService,
    private patientService: PatientService,
    private authService: AuthService,
  ) {}

  /**
   * Méthode d'initialisation du composant.
   * Récupère les données de consultation et de patient, puis charge le bilan radiologique associé.
   */
  ngOnInit(): void {
    const user = this.authService.getUser(); // Récupère l'utilisateur authentifié

    // Obtenir la consultation en cours
    this.consultation = this.consultationService.getConsultation();
    this.numcons = this.consultation.numero_consultation;

    // Obtenir les informations du patient
    this.patient = this.patientService.getPatient();

    // Vérifier le rôle de l'utilisateur (Médecin ou Patient) et récupérer le NSS correspondant
    if (user && user.role === 'Medecin') {
      this.nss = this.patientService.getPatient().patient_data.nss; // NSS pour le médecin
      console.log(this.nss);
    }

    if (user && user.role === 'Patient') {
      this.nss = this.patientService.getPatient().data.nss; // NSS pour le patient
      console.log(this.nss);
    }

    // Si la consultation et les informations du patient sont valides, récupérer le bilan radiologique
    if (this.consultation && this.patient) {
      this.bilanRadiologiqueService.getBilanRadiologique(this.nss, this.numcons)
        .subscribe(
          (data) => {
            this.bilanRadio = data; // Stocke le bilan radiologique récupéré
            console.log(this.bilanRadio);
          },
          (error) => {
            console.error('Erreur lors de la récupération du bilan radiologique:', error); // Gère les erreurs
          }
        );
    }
  }
}
