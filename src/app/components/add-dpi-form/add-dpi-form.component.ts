import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreerDPIService } from '../../services/creer-dpi.service';

@Component({
  selector: 'app-add-dpi-form',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true, 
  templateUrl: './add-dpi-form.component.html',
  styleUrl: './add-dpi-form.component.css'
})
export class AddDpiFormComponent {
  dpiForm: FormGroup;
  constructor(private fb: FormBuilder, private CreerDPIService:CreerDPIService) {
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
  qrCodeUrl: string = '';
 

  generateQRCode(inputNumber: number): void {
    if (isNaN(inputNumber)) {
      console.error('Please enter a valid number');
      return;
    }
    this.qrCodeUrl = `https://quickchart.io/qr?text=${inputNumber}`;
  }
  onSubmit() {
    if (this.dpiForm.valid) {
      console.log('Form Data:', this.dpiForm.value);
      this.generateQRCode(this.dpiForm.value.nss);
      this.CreerDPIService.CreerDpi(
        this.dpiForm.value.nom,
        this.dpiForm.value.prenom,
        this.dpiForm.value.email,
        this.dpiForm.value.nss,
        this.dpiForm.value.telephone,
        this.dpiForm.value.telephoneUrgence,
        this.dpiForm.value.nomUtilisateur,
        this.dpiForm.value.motDePasse,
        this.dpiForm.value.dateNaissance,
        this.dpiForm.value.adresse,
        this.dpiForm.value.medecinTraitant,
        this.dpiForm.value.mutuelle,
        this.qrCodeUrl
      
      ).subscribe(
        (response) => {
          console.log('Mock response received:', response);
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}

