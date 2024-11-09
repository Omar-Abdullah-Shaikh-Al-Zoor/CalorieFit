import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  submitted: boolean = false;
  email: string = '';
  password: string = '';
  message: string = '';

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(private dataService: DataService) {}
 // Triggered when form is submitted
  login() {
    this.submitted = true;
    if (this.LoginForm.invalid) return;

    const email = this.LoginForm.get('email')?.value || '';
    const password = this.LoginForm.get('password')?.value || '';
    this.dataService.login(email, password).subscribe({
      next: (response) => {
        console.log(response);
        this.message = response.message;
      },
      error: (error) => {
        console.log(error);
        this.message = error.error;
      }
    });
  }

  // Helper method to check if a form field is invalid after submission
  isFieldInvalid(fieldName: string): boolean {
    const field = this.LoginForm.get(fieldName);
    return field ? field.invalid && (field.touched || this.submitted) : false;
  }
}
