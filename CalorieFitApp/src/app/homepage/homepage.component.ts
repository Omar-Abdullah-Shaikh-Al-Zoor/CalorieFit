import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {
  constructor(private router: Router) { }
  navigateToWorkout(): void {
    this.router.navigate(['/workout-page']); 
  }
  navigateTodietpage(): void {
    this.router.navigate(['/createDietPlan']); 
  }
}
