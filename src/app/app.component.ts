import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AddStaffPageComponent } from './pages/add-staff-page/add-staff-page.component';

@Component({
  selector: 'app-root', 
 imports: [ LoginPageComponent, AddStaffPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nom-du-projet';
}
