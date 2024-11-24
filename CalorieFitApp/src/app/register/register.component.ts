import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  submitted: boolean = false;
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  password: string = '';
  message: string = '';
  error: string = '';
  RegisterForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,}')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),  // Example: Minimum 8 characters, at least one letter and one number
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private dataService: DataService) {}

  passwordMatchValidator() {
    const password = this.RegisterForm.get('password')?.value || '';
    const confirmPassword = this.RegisterForm.get('confirmPassword')?.value || '';
    if (!password || !confirmPassword) return false;
    return confirmPassword !== password;
  }

  // Triggered when form is submitted
  register() {
    if (this.RegisterForm.invalid) {
      this.submitted = false;
      return;
    }

    const first_name = this.RegisterForm.get('firstName')?.value || '';
    const last_name = this.RegisterForm.get('lastName')?.value || '';
    const email = this.RegisterForm.get('email')?.value || '';
    const password = this.RegisterForm.get('password')?.value || '';
    const confirmPassword = this.RegisterForm.get('confirmPassword')?.value || '';

    if (password !== confirmPassword) {
      this.error = 'Passwords do not match';
      this.showErrorDialog();
      return;
    }

    this.dataService.register(first_name, last_name, email, password).subscribe({
      next: (response) => {
        this.submitted = true;
        this.message = response.message;
        this.navigateTo('/login');
      },
      error: (error) => {
        this.error = error.error.error;
        this.showErrorDialog();
      }
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.RegisterForm.get(fieldName);
    return field ? field.invalid && (field.touched || this.submitted) : false;
  }

  showErrorDialog() {
    const dialog: any = document.getElementById('errorDialog');
    if (dialog) dialog.showModal();
  }


  closeErrorDialog() {
    const dialog: any = document.getElementById('errorDialog');
    if (dialog) dialog.close();
    this.error = '';
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
