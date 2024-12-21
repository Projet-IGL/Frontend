import { Component, HostListener } from '@angular/core';
import { AddDpiNavBarComponent } from "../../components/add-dpi-nav-bar/add-dpi-nav-bar.component";
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QRCodeComponent } from 'angularx-qrcode';
import { CommonModule } from '@angular/common'; // Ajoutez CommonModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-rech-dpi-page',
  imports: [AddDpiNavBarComponent, ZXingScannerModule,QRCodeComponent, CommonModule],
  templateUrl: './rech-dpi-page.component.html',
  styleUrl: './rech-dpi-page.component.css'
})


export class RechDpiPageComponent {
  constructor(private router: Router) {}
  isScanning: boolean = false; // Contrôle l'état du scanner
  dataToEncode: string = '01234567897';
 
  toggleScanner(): void {
    this.isScanning = !this.isScanning; // Bascule l'état du scanner
  }
  closeScanner(): void {
    this.isScanning = false;
  }
  onCodeScanned(result: string): void {
    console.log('Code scanné:', result);
    this.isScanning = false;
    alert(`Code détecté : ${result}`);
}

goToPatientPage(){
  this.router.navigate(['/Rech-dpi/Patient']);
}

}