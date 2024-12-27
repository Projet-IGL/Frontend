import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Importer AuthService

@Component({
  selector: 'app-info-patient',
  imports: [], // Aucun module supplémentaire ici
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.css']
})
export class InfoPatientComponent implements OnInit {
  patient: any = null; // Informations du patient

  constructor(private authService: AuthService) {}

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
