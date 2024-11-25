import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Workout } from '../workout';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrls: ['./workout-page.component.css']
})
export class WorkoutPageComponent implements OnInit {
  workouts: Workout[] = [];
  frequency: string = 'six';

  constructor(private workoutService: WorkoutService) { }

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
}