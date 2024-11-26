import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-diet-page',
  templateUrl: './diet-page.component.html',
  styleUrl: './diet-page.component.css'
})
export class DietPageComponent {
    constructor(private router: Router) {}
    navigateTo(): void {
        this.router.navigate(['/workout-page']);
    }
}
