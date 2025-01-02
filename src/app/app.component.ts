import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AddStaffPageComponent } from './pages/add-staff-page/add-staff-page.component';
import { AddDpiPageComponent } from './pages/add-dpi-page/add-dpi-page.component';
import { QRCodeComponent } from 'angularx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FormsModule } from '@angular/forms';

/**
 * Composant principal de l'application.
 * Il gère les pages de l'application telles que la page de connexion, 
 * l'ajout de personnel, l'ajout de DPI, et le QRCode.
 * 
 * @component
 * @selector app-root
 * @imports 
 *  - AddDpiPageComponent: Composant de la page d'ajout de DPI
 *  - LoginPageComponent: Composant de la page de connexion
 *  - AddStaffPageComponent: Composant de la page d'ajout de personnel
 *  - RouterOutlet: Composant pour la gestion des routes
 *  - QRCodeComponent: Composant pour générer des QR codes
 *  - ZXingScannerModule: Module pour scanner des QR codes
 *  - FormsModule: Module pour gérer les formulaires dans Angular
 */
@Component({
  selector: 'app-root', 
  imports: [AddDpiPageComponent,
     LoginPageComponent, 
     AddStaffPageComponent, 
     RouterOutlet,
     QRCodeComponent, 
     ZXingScannerModule,
     FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /** Le titre de l'application */
  title = 'nom-du-projet';
}
