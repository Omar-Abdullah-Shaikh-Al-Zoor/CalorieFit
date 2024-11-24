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
  dialog: {title?: string, type?: string, message?: string} = {};
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
      for (const key in this.RegisterForm.controls) {
        if (this.RegisterForm.get(key)?.invalid) {
          this.RegisterForm.get(key)?.markAsTouched(); // Mark field as touched if invalid
        }
      }
      this.submitted = false;
      return;
    }

    const first_name = this.RegisterForm.get('firstName')?.value || '';
    const last_name = this.RegisterForm.get('lastName')?.value || '';
    const email = this.RegisterForm.get('email')?.value || '';
    const password = this.RegisterForm.get('password')?.value || '';
    const confirmPassword = this.RegisterForm.get('confirmPassword')?.value || '';

    if (password !== confirmPassword) {
      this.dialog.message = 'Passwords do not match';
      this.dialog.title = 'Registration Error';
      this.dialog.type = 'error';
      this.showDialog();
      return;
    }

    this.dataService.register(first_name, last_name, email, password).subscribe({
      next: (response) => {
        this.submitted = true;
        this.message = response.message;
        this.dialog.title = 'Register Success';
        this.dialog.message = response.message;
        this.dialog.type = 'success';
        this.showDialog();
        setTimeout(() => {
          this.navigateTo('/login');
        }, 3000);
      },
      error: (error) => {
        this.dialog.title = 'Registration Error';
        this.dialog.message = error.error.error;
        this.dialog.type = 'error';
        this.showDialog();
      }
    });
  }

  togglePasswordVisibility(field: string): void {
    const confirmField = document.getElementById(field) as HTMLInputElement;
    const eyeIcon = document.getElementById(`toggle${field}`) as HTMLElement;
    if (confirmField.type === 'password') {
      confirmField.type = 'text';  // Show the password
      eyeIcon.classList.remove('bi-eye');
      eyeIcon.classList.add('bi-eye-slash');  // Change to "eye-slash" icon
    } else {
      confirmField.type = 'password';  // Hide the password
      eyeIcon.classList.remove('bi-eye-slash');
      eyeIcon.classList.add('bi-eye');  // Change to "eye" icon
    }
  }


  isInvalidPattern(fieldName: string): boolean {
    const field = this.RegisterForm.get(fieldName);
    return field ? !!this.RegisterForm.get(fieldName)?.hasError('pattern') && (field.touched || this.submitted) : false;
  }
  isFieldInvalid(fieldName: string): boolean {
    const field = this.RegisterForm.get(fieldName);
    return field ? !!this.RegisterForm.get(fieldName)?.hasError('required') && (field.touched || this.submitted) : false;
  }

  showDialog() {
    const dialog: any = document.getElementById('Dialog');
    if (dialog) dialog.showModal();
  }


  closeDialog() {
    const dialog: any = document.getElementById('Dialog');
    if (dialog) dialog.close();
    this.dialog.message = '';
    this.dialog.title = '';
    this.dialog.type = '';
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
