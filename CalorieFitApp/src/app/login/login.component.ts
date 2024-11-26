import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitted: boolean = false;
  email: string = '';
  password: string = '';
  message: string = '';
  error: string = '';
  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(private router: Router, private dataService: DataService) {}
  // Triggered when form is submitted
  login() {
    if (this.LoginForm.invalid) {
      for (const key in this.LoginForm.controls) {
        if (this.LoginForm.get(key)?.invalid) {
          this.LoginForm.get(key)?.markAsTouched(); // Mark field as touched if invalid
        }
      }
      this.submitted = false;
      return;
    }
    const email = this.LoginForm.get('email')?.value || '';
    const password = this.LoginForm.get('password')?.value || '';
    if (this.isFieldInvalid('email') || this.isFieldInvalid('password')) {
      this.submitted = false;
      return;
    }
    this.dataService.login(email, password).subscribe({
      next: (response) => {
        this.submitted = true;
        this.message = response.message;
        this.navigateTo('/home');
      },
      error: (error) => {
        console.log(error.error.error);
        this.error = error.error.error;
        this.showErrorDialog();
      }
    });
  }
  // Helper method to check if a form field is invalid after submission
  isFieldInvalid(fieldName: string): boolean {
    const field = this.LoginForm.get(fieldName);
    return field ? field.invalid && (field.touched || this.submitted) : false;
  }
  showErrorDialog() {
    const dialog: any = document.getElementById('errorDialog');
    if (dialog) {
      dialog.showModal();
    }
  }
  closeErrorDialog() {
    const dialog: any = document.getElementById('errorDialog');
    if (dialog) {
      dialog.close();
    }
    this.error = '';
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
