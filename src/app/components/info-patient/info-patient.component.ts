import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Importer AuthService

/**
 * Composant qui gère l'affichage des informations du patient.
 * Ce composant permet de récupérer les informations du patient
 * connecté et de les afficher.
 */
@Component({
  selector: 'app-info-patient',
  imports: [], // Aucun module supplémentaire ici
  templateUrl: './info-patient.component.html', // Template HTML associé au composant
  styleUrls: ['./info-patient.component.css'] // Styles CSS associés au composant
})
export class InfoPatientComponent implements OnInit {
  /**
   * 
   *  @type {patient}
   * Représente les informations du patient connecté.
   */
  patient: any = null; // Informations du patient
  
  /**
   * Constructeur du composant.
   * 
   * @param authService Le service permettant de récupérer les informations de l'utilisateur.
   */
  constructor(private authService: AuthService) {}

  /**
   * Méthode appelée lors de l'initialisation du composant.
   * Elle récupère les informations de l'utilisateur connecté.
   * Si l'utilisateur est un patient, ses informations sont assignées à la variable `patient`.
   * Si l'utilisateur n'est pas un patient, une erreur est affichée dans la console.
   */
  ngOnInit(): void {
    const user = this.authService.getUser(); // Récupère les informations de l'utilisateur connecté

    if (user && user.role === 'Patient') {
      // Si l'utilisateur est un patient, récupère ses informations
      this.patient = user;
    } else {
      // Si l'utilisateur n'est pas un patient, redirige vers une page d'erreur ou autre gestion
      console.error("Utilisateur non autorisé à accéder à cette page.");
    }
  }
}

  
  