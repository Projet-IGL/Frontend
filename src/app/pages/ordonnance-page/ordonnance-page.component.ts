import { Component, OnInit } from '@angular/core';
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { ConsultationNavbarComponent } from "../../components/consultation-navbar/consultation-navbar.component";
import { OrdonnanceService } from '../../services/ordonnance.service';
import { ConsultationService } from '../../services/consultation.service';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ordonnance-page',
  imports: [EmptyNavbarComponent, ConsultationNavbarComponent, CommonModule],
  templateUrl: './ordonnance-page.component.html',
  styleUrls: ['./ordonnance-page.component.css']
})
export class OrdonnancePageComponent implements OnInit {

  /** 
   * Liste des ordonnances associées à la consultation et au patient.
   * Cette variable est remplie après un appel à `ordonnanceService.getData` qui retourne
   * la liste des ordonnances pour le patient et la consultation en cours.
   * @type {any}
   */
  ordoList: any;

  /** 
   * Détails de la consultation en cours, incluant des informations telles que le numéro de consultation,
   * la date, et potentiellement d'autres informations relatives à la consultation.
   * @type {any}
   */
  consultation: any;

  /** 
   * Numéro de consultation unique associé à la consultation actuelle.
   * Utilisé pour récupérer les ordonnances spécifiques à cette consultation.
   * @type {string}
   */
  numero_consultation: string = '';

  /** 
   * Numéro de sécurité sociale (NSS) du patient.
   * Il est récupéré en fonction du rôle de l'utilisateur (médecin ou patient) et est utilisé
   * pour rechercher les ordonnances correspondant à ce patient.
   * @type {string}
   */
  nss: string = '';

  constructor(
    /** Service utilisé pour récupérer les ordonnances depuis le backend */
    private ordonnanceService: OrdonnanceService,

    /** Service utilisé pour récupérer les données de consultation */
    private consultationService: ConsultationService,

    /** Service utilisé pour récupérer les informations du patient */
    private patientService: PatientService,

    /** Service utilisé pour gérer l'authentification et récupérer les informations de l'utilisateur connecté */
    private authService: AuthService
  ) {}

  /**
   * Méthode d'initialisation qui s'exécute dès que le composant est créé.
   * - Récupère les données de l'utilisateur connecté et son rôle.
   * - En fonction du rôle (médecin ou patient), récupère le numéro de sécurité sociale (NSS).
   * - Récupère les détails de la consultation en cours.
   * - Effectue une requête pour récupérer les ordonnances associées au NSS et au numéro de consultation.
   * 
   * Les données récupérées sont ensuite affichées dans la console pour la vérification.
   * 
   * @memberof OrdonnancePageComponent
   */
  ngOnInit(): void {
    // Récupère les informations de l'utilisateur connecté
    const user = this.authService.getUser();

    // Si l'utilisateur est un médecin, on récupère le NSS à partir des données du patient
    if (user && user.role === 'Medecin') {
      this.nss = this.patientService.getPatient().patient_data.nss;
      console.log(this.nss);
    }

    // Si l'utilisateur est un patient, on récupère également le NSS à partir de ses données
    if (user && user.role === 'Patient') {
      this.nss = this.patientService.getPatient().data.nss;
      console.log(this.nss);
    }

    // Récupère la consultation en cours via le service ConsultationService
    this.consultation = this.consultationService.getConsultation();

    // On récupère le numéro de consultation spécifique à la consultation actuelle
    this.numero_consultation = this.consultation.numero_consultation;

    // Récupère les ordonnances pour le NSS et le numéro de consultation
    this.ordonnanceService.getData(this.nss, this.numero_consultation).subscribe((data) => {
      // On stocke les ordonnances récupérées dans `ordoList`
      this.ordoList = data;
      // Affiche les données récupérées dans la console pour le débogage
      console.log(data);
      console.log(this.ordoList);
    });

    // Affiche les données des ordonnances et le numéro de consultation dans la console pour vérification
    console.log('ordoooonance', this.ordoList);
    console.log('num cons', this.numero_consultation);
  }
}
