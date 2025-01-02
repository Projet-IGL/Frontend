import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BilanBioService } from '../../services/bilan-bio.service';
import { ConsultationService } from '../../services/consultation.service';
import { PatientService } from '../../services/patient.service';
import { AuthService } from '../../services/auth.service';

/**
 * Composant qui gère l'affichage du bilan biologique d'un patient.
 * Ce composant permet de récupérer et d'afficher les données relatives
 * à la glycémie, la pression artérielle, le cholestérol, et le graphique associé
 * à partir de l'API.
 */
@Component({
  selector: 'app-mon-bilan-bio',
  imports: [FormsModule, CommonModule], // Import des modules nécessaires
  templateUrl: './mon-bilan-bio.component.html', // Template HTML associé au composant
  styleUrl: './mon-bilan-bio.component.css' // Styles CSS associés au composant
})
export class MonBilanBioComponent implements OnInit {
  /**
   * Les information de l'utilisateur connecté
   * ce champs est à null si les informations ne sont pas disponibles
   */
  user: any = null; // Informations utilisateur
  /**
   * Les information du patient à qui le bilan est associé
   * ce champs est à null si les informations ne sont pas disponibles
  */
  patient: any; // Informations du patient
  /**
   * Les informations sur la consulation en cours
   * ce champs est à null si les informations ne sont pas disponibles
   */
  consultation: any = null; // Informations sur la consultation en cours
  /**
   * La mesure de la glycémie 
   * ce champs est à null si les informations ne sont pas disponibles 
   */
  glycemie: number | null = null; // Glycémie du patient
  /**
   * La mesure de la pression
   * ce champs est à null si les informations ne sont pas disponibles
   */
  pression: number | null = null; // Pression artérielle du patient
  /**
   * La mesure du cholesterol
   * ce champs est à null si les informations ne sont pas disponibles
   */
  cholesterol: number | null = null; // Cholestérol du patient
  /**
   * Le graphe de tendance
   * ce champs est à null si les informations ne sont pas disponibles
   */
  graphImageUrl: string | null = null; // URL de l'image du graphique du bilan biologique
  /**
   * Indicateur sur la disponibilité du bilan biologique
   */
  bilanDisponible: boolean = false; // Indicateur pour savoir si le bilan est disponible
  /**
   * Le numéro de la consultation en cours
   */
  numcons: string = ''; // Numéro de consultation
  /**
   * Numéro de Sécurité Sociale (NSS) du patient associé au soin.
   * Il doit être un identifiant unique valide.
   */
  nss: string = ''; // Numéro de sécurité sociale du patient

  /**
   * Constructeur du composant MonBilanBioComponent
   * @param bilanBioService - Service pour récupérer les bilans biologiques
   * @param patientService - Service pour récupérer les informations du patient
   * @param authService - Service pour récupérer les informations de l'utilisateur connecté
   * @param consultationService - Service pour récupérer les informations sur la consultation
   */
  constructor(
    private bilanBioService: BilanBioService,
    private patientService: PatientService,
    private authService: AuthService,
    private consultationService: ConsultationService
  ) {}

  /**
   * Méthode appelée lors de l'initialisation du composant.
   * Récupère les informations de l'utilisateur et les données relatives à la consultation.
   * Appelle la méthode de récupération du bilan biologique si nécessaire.
   */
  ngOnInit() {
    const user = this.authService.getUser();
    // Obtenir la consultation en cours
    this.consultation = this.consultationService.getConsultation();
    this.numcons = this.consultation.numero_consultation;
    this.patient = this.patientService.getPatient();
    if (user && user.role === 'Medecin') {
      this.nss = this.patientService.getPatient().patient_data.nss;
      console.log(this.nss);
    }
    if (user && user.role === 'Patient') {
      this.nss = this.patientService.getPatient().data.nss;
      console.log(this.nss);
    }    
    if (this.consultation) {
      console.log(this.consultation);
      this.fetchBilanData();
    }
  }

  /**
   * Méthode pour récupérer les données du bilan biologique du patient.
   * Appelle le service pour obtenir les données du bilan et les affiche.
   * @returns void
   */
  fetchBilanData() {
    this.bilanBioService.getBilanBio(this.nss, this.numcons).subscribe(
      (data: any) => {
        this.glycemie = data.bilan_biologique.glycemie || null;
        this.pression = data.bilan_biologique.pression_arterielle || null;
        this.cholesterol = data.bilan_biologique.cholesterol || null;
        this.graphImageUrl = 'http://127.0.0.1:8000' + data.bilan_biologique.graphe || null;
        this.bilanDisponible = true;
        console.log(data);
      },
      (error) => {
        console.error('Erreur lors de la récupération du bilan :', error);
        this.bilanDisponible = false;
      }
    );
  }
}
