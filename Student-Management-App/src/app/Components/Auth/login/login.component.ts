import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthServiceService,
    private router: Router,
  ) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert('Invalid credentials');
      },
    });
  }
}
