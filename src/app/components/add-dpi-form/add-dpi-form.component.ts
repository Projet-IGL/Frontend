import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-dpi-form',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true, 
  templateUrl: './add-dpi-form.component.html',
  styleUrl: './add-dpi-form.component.css'
})
export class AddDpiFormComponent {
  dpiForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dpiForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      nss: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      telephoneUrgence: ['', Validators.required],
      adresse: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      medecinTraitant: ['', Validators.required],
      nomUtilisateur: ['', Validators.required],
      motDePasse: ['', Validators.required],
      mutuelle: ['']
    });
  }

  onSubmit() {
    console.log("hello")//hna nrmlmn nb3to http request ll backend bach n7to this new user f la bdd
    if (this.dpiForm.valid) {
      console.log('Form Data:', this.dpiForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}

