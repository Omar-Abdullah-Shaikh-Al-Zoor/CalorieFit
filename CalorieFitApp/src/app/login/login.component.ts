import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //public email: string = '';
  submitted = false;
  password: string = '';
  
  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor() {}
 // Triggered when form is submitted
  Login(): void {
    this.submitted = true;
    if (this.LoginForm.valid) {
      console.log(this.LoginForm.value.email, this.LoginForm.value.password);
      console.log('Form submitted');
      // You can add further login logic here
    }
  }

  // Helper method to check if a form field is invalid after submission
  isFieldInvalid(fieldName: string): boolean {
    const field = this.LoginForm.get(fieldName);
    return field ? field.invalid && (field.touched || this.submitted) : false;
  }
}
