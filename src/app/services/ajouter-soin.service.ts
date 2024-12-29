import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Soin {
  time: string;
  nss: string;
  details: string;
  observations: string;
  medicamentAdministre: boolean;
  infirmierId: string | null; // Autorise null ici

}

@Injectable({
  providedIn: 'root'
})
export class AjouterSoinService {
  private apiUrl = 'http://127.0.0.1:8000/api/faire_soin/'; // URL de votre API backend

  constructor(private http: HttpClient) {}

  // Ajouter un nouveau soin
  addSoin(soin: Soin): Observable<Soin> {
    return this.http.post<Soin>(this.apiUrl, soin);
  }

  // Vérifier l'existence d'un NSS
  checkNssExistence(nss: string): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/api/checkNss/?nss=${nss} `);
  }
}
