import { Component } from '@angular/core';
import { LoginFormComponent } from "../../components/login-form/login-form.component";

/**
 * Composant représentant la page de connexion de l'application.
 * Ce composant intègre le formulaire de connexion via le composant `LoginFormComponent`.
 */
@Component({
  selector: 'app-login-page', // Sélecteur du composant
  imports: [LoginFormComponent], // Importation du composant `LoginFormComponent` utilisé dans ce composant
  standalone: true, // Composant autonome, sans module Angular supplémentaire
  templateUrl: './login-page.component.html', // Template HTML pour le composant
  styleUrl: './login-page.component.css' // Feuille de style CSS pour le composant
})
export class LoginPageComponent {
  // Aucune logique spécifique n'est définie ici, le composant sert uniquement à intégrer `LoginFormComponent`.
}
