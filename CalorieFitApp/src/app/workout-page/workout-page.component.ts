import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Workout } from '../workout';
import { VitalStatusService } from '../vital-status.service'; // Import VitalStatusService
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrls: ['./workout-page.component.css']
})
export class WorkoutPageComponent implements OnInit {
  workouts: Workout[] = [];
  frequency: string = ''; // Will be dynamically updated based on weeklyAvailability

  constructor(
    private workoutService: WorkoutService,
    private vitalStatusService: VitalStatusService, // Inject VitalStatusService
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchFrequencyAndWorkoutPlan();
  }

  // Fetch frequency based on weeklyAvailability from VitalStatusService and then fetch the workout plan
  fetchFrequencyAndWorkoutPlan(): void {
    const vitalStatus = this.vitalStatusService.getVitalStatus(); // Get data from the service
    if (vitalStatus?.weeklyAvailability) {
      // Map weeklyAvailability to frequency
      this.frequency = this.mapAvailabilityToFrequency(vitalStatus.weeklyAvailability);
      this.getWorkoutPlan(); // Fetch the workout plan based on the frequency
    } else {
      console.error('Weekly availability data is missing in VitalStatusService!');
    }
  }

  // Function to map weeklyAvailability to the corresponding workout frequency
  mapAvailabilityToFrequency(availability: string): string {
    switch (availability.toLowerCase()) {
      case 'once a week':
        return 'once';
      case 'three days a week':
        return 'three';
      case 'four days a week':
        return 'four';
      case 'six days a week':
        return 'six';
      default:
        return 'once';
    }
  }

  // Fetch the workout plan based on frequency
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

  // Handle navigation to the registration page
  navigateToRegistration(): void {
    this.router.navigate(['/register']);
  }
}
