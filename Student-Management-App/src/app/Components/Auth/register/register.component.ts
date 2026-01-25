import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private authService: AuthServiceService,
    private router: Router,
  ) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService
      .register({
        userName: this.name,
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: () => {
          alert('Registration succesful');
          this.router.navigate(['/login']);
        },

        error: () => {
          alert('Registration failed');
        },
      });
  }
}
