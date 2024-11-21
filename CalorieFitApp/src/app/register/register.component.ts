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
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    // dateOfBirth: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private dataService: DataService) {}

  passwordsMismatch() {
    const password = this.RegisterForm.get('password')?.value || '';
    const confirmPassword = this.RegisterForm.get('confirmPassword')?.value || '';
    if (confirmPassword != password) return true;
    else return false;
  }

  // Triggered when form is submitted
  register() {
    if (this.RegisterForm.invalid) {
      document.getElementById('password')?.classList.add('is-invalid');
      this.submitted = false;
      return;
    }
    const first_name = this.RegisterForm.get('firstName')?.value || '';
    const last_name = this.RegisterForm.get('lastName')?.value || '';
    const email = this.RegisterForm.get('email')?.value || '';
    const password = this.RegisterForm.get('password')?.value || '';
    const confirmPassword = this.RegisterForm.get('confirmPassword')?.value || '';
    if (password !== confirmPassword) {
      this.error = 'Password does not match';
      this.showErrorDialog()
    }
    if (
      this.isFieldInvalid('email')
      || this.isFieldInvalid('password')
      || this.isFieldInvalid('confirmPassword')
      || this.isFieldInvalid('firstName')
      || this.isFieldInvalid('lastName')
      //|| this.isFieldInvalid('dateOfBirth')
    ){
      console.log('Invalid field');
      document.getElementById('email')?.classList.add('is-invalid');
      this.submitted = false;
      return;
    }
    this.dataService.register(first_name, last_name, email, password).subscribe({
      next: (response) => {
        this.submitted = true;
        this.message = response.message;
        this.navigateTo('/login');
      },
      error: (error) => {
        console.log(error);
        this.error = error.error.error;

        this.showErrorDialog();
      }
    });
  }
  // Helper method to check if a form field is invalid after submission
  isFieldInvalid(fieldName: string): boolean {
    const field = this.RegisterForm.get(fieldName);
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
