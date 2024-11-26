import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  submitted: boolean = false;
  invalidEmail: boolean | null = null;
  dialog: { title: string, message: string, type: string } | null = null;
  email: string = '';
  ForgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private router: Router, private dataService: DataService) {}
  // Triggered when form is submitted
  async forgetPassword() {
    if (this.ForgetPasswordForm.invalid) {
      for (const key in this.ForgetPasswordForm.controls) {
        if (this.ForgetPasswordForm.get(key)?.invalid) {
          this.ForgetPasswordForm.get(key)?.markAsTouched(); // Mark field as touched if invalid
        }
      }
      this.submitted = false;
      this.invalidEmail = null;
      return;
    }
    const email = this.ForgetPasswordForm.get('email')?.value || '';
    if (this.isInvalidField()) {
      this.submitted = false;
      this.invalidEmail = null;
      return;
    }
    const validEmail = await this.validateEmail(email);

    if (!validEmail) {
      this.submitted = false;
      this.invalidEmail = true;
      return;
    }

    this.invalidEmail = false;
    this.dataService.reset_password_email(email).subscribe({
      next: (response) => {
        this.dialog = { title: 'Success', message: response.message, type: 'success' };
        this.submitted = true;
        this.showDialog();
      },
      error: (error) => {
        this.dialog = { title: 'Error', message: error.error.error, type: 'error' };
        this.showDialog();
      }
    });
  }
  isInvalidField(): boolean {
    const field = this.ForgetPasswordForm.get('email');
    return field ? field.invalid && (field.touched || this.submitted) : false;
  }
  validateEmail(email: string): Promise<boolean> {
    return firstValueFrom(this.dataService.validate_email(email)).then(
      (response) => {
        console.log('Response:', response);
        return response === true;
      },
      (error) => {
        console.error('Error:', error);
        return false;
      }
    );
  }

  showDialog() {
    const dialog: any = document.getElementById('Dialog');
    if (dialog) {
      dialog.showModal();
    }
  }
  closeDialog() {
    const dialog: any = document.getElementById('Dialog');
    if (dialog) {
      dialog.close();
    }
    this.dialog = { title: '', message: '', type: '' };
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
