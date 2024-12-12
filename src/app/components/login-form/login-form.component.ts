import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(private router: Router) {}
  goToadminPage() {
    this.router.navigate(['/add-dpi']);
  }
}
