import { Component } from '@angular/core';

/**
 * Composant représentant un formulaire pour ajouter ou gérer le personnel.
 * Ce composant permet de gérer l'ajout et la modification des informations du personnel.
 */
@Component({
  selector: 'app-personnel-form', // Le sélecteur pour utiliser ce composant dans un template
  imports: [], // Liste des modules nécessaires à ce composant (vide dans ce cas)
  templateUrl: './personnel-form.component.html', // Chemin vers le fichier de template HTML
  styleUrls: ['./personnel-form.component.css'] // Chemin vers le fichier de styles CSS
})
export class PersonnelFormComponent {
  // Le corps du composant peut être ajouté ici, si nécessaire pour la logique du formulaire
}
