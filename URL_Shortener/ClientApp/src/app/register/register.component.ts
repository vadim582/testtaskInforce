import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerModel = { email: '', password: '' };

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.register(this.registerModel).subscribe(
      response => {
        console.log('Registration successful:', response);
      },
      error => {
        console.error('Registration error:', error);
      }
    );
  }
}
