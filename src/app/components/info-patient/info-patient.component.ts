import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-patient',
  imports: [],
  templateUrl: './info-patient.component.html',
  styleUrl: './info-patient.component.css'
})
export class InfoPatientComponent {
  patient: any = {
    nom: 'Aouissi',
    prenom: 'Bouchra',
    nss: '123456789',
    email: 'mb_aouissi@esi.dz',
    telephone: '0555 123 456',
    telephoneUrgence: '0666 789 101',
    medecinTraitant: 'Dr. Amel Kaci',
    mutuelle: 'CNAS'
  };

  constructor() { }

  ngOnInit(): void { }

}
