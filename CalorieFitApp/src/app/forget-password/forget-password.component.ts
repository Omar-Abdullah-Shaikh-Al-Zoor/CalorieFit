import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  submitted: boolean = false;
  email: string = '';
  message: string = '';
  error: string = '';
  ForgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private router: Router, private dataService: DataService) {}
  // Triggered when form is submitted
  forgetPassword() {
    if (this.ForgetPasswordForm.invalid) {
      for (const key in this.ForgetPasswordForm.controls) {
        if (this.ForgetPasswordForm.get(key)?.invalid) {
          this.ForgetPasswordForm.get(key)?.markAsTouched(); // Mark field as touched if invalid
        }
      }
      this.submitted = false;
      return;
    }
    const email = this.ForgetPasswordForm.get('email')?.value || '';
    const password = this.ForgetPasswordForm.get('password')?.value || '';
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
    const field = this.ForgetPasswordForm.get(fieldName);
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
