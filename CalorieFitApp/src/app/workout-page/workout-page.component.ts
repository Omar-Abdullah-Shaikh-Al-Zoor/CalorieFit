import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Workout } from '../workout';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrls: ['./workout-page.component.css']
})
export class WorkoutPageComponent implements OnInit {
  workouts: Workout[] = [];
  frequency: string = 'three';

  // Inject Router into the constructor
  constructor(private workoutService: WorkoutService, private router: Router) { }

  ngOnInit(): void {
    this.getWorkoutPlan();
  }

  getWorkoutPlan(): void {
    this.workoutService.getWorkoutPlan(this.frequency).subscribe(
      (data: Workout[]) => {
        this.workouts = data;
      },
      (error) => {
        console.error('Error fetching workout plan:', error);
      }
    );
  }

  onFrequencyChange(): void {
    this.getWorkoutPlan();
  }

  // Add navigateToRegistration function
  navigateToRegistration(): void {
    this.router.navigate(['/register']); // Ensure 'registration' is a valid route in your app
  }
}
