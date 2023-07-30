import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel = { email: '', password: '', returnUrl: '' };

  constructor(private authService: AuthService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    // Get the returnUrl from the query parameters
    this.route.queryParams.subscribe(params => {
      this.loginModel.returnUrl = params['returnUrl'] || '/';
    });
  }
  onSubmit() {
    this.authService.login(this.loginModel).subscribe(
      response => {
        console.log('Login successful:', response);
      },
      error => {
        console.error('Login error:', error);
      }
    );
  }
}
