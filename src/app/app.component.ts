import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AddStaffPageComponent } from './pages/add-staff-page/add-staff-page.component';
import { AddDpiPageComponent } from './pages/add-dpi-page/add-dpi-page.component';
import { QRCodeComponent } from 'angularx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FormsModule } from '@angular/forms';

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
  title = 'nom-du-projet';
}
