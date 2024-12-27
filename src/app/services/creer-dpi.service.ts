import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreerDPIService {
  private apiUrl = 'http://localhost:3000/Dpis'; // Ensure the path is correct

  constructor(private http: HttpClient) { }

  CreerDpi(
    nom: string,
    prenom: string,
    email: string,
    nss: string,
    numtel: string,
    numtelurg: string,
    username: string,
    password: string,
    dateDeNaissance:Date,
    adresse:String,
    medecin:String,
    mutuelle:String,
    qrCode:String,
  ): Observable<any> {
    const newDpi = { nom, prenom, email, nss, numtel, numtelurg, username, password,dateDeNaissance,adresse,medecin,mutuelle,qrCode };
    console.log('Mocking a request with:', newDpi);
    return this.http.post<any>(this.apiUrl, newDpi); 
  }
}
