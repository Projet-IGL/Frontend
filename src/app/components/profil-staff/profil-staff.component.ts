import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-staff',
  templateUrl: './profil-staff.component.html',
  styleUrls: ['./profil-staff.component.css']
})
export class ProfilStaffComponent implements OnInit {
  staff: any = {
    nom: 'Aouissi',
    prenom: 'Bouchra',
    nss: '123456789',
    email: 'mb_aouissi@esi.dz',
    adresse: 'adresse',
    specialite: 'Infermier',
    nomUtilisateur: 'userName'
  };

  constructor() { }

  ngOnInit(): void { }
}
