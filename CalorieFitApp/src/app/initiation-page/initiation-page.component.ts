import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VitalStatusService } from '../vital-status.service';

@Component({
  selector: 'app-initiation-page',
  templateUrl: './initiation-page.component.html',
  styleUrls: ['./initiation-page.component.css']
})
export class InitiationPageComponent {
  step: number = 1;  // Step counter to control the current question
  fitnessGoal: string = '';
  gender: string = '';
  weeklyAvailability: string = '';  // New property for weekly availability

  weight: number | null = null;
  height: number | null = null;
  age: number | null = null;

  dailyCaloricExpenditure: number = 0;
  dailyProteinIntake: number = 0;
  dailyCarbIntake: number = 0;

  constructor(private router: Router, private vitalStatusService: VitalStatusService) {}

  // Function to handle selection of fitness goal
  selectGoal(goal: string): void {
    this.fitnessGoal = goal;
    //console.log('Selected Fitness Goal:', this.fitnessGoal);
    this.nextStep();
  }

  // Function to handle gender selection
  selectGender(gender: string): void {
    this.gender = gender;
    //console.log('Selected Gender:', this.gender);
    this.nextStep();
  }

  // Function to handle weekly availability selection
  selectWeeklyAvailability(availability: string): void {
    this.weeklyAvailability = availability;
    //console.log('Selected Weekly Availability:', this.weeklyAvailability);
    this.nextStep();
  }

  // Function to handle form submission
  submitForm(): void {
    this.onSubmit(); // Call the onSubmit method to perform calculations and update userDetails
    this.step++; // Move to the next step or show results after submitting
  }

  // Move to the next step
  nextStep(): void {
    this.step++;
  }

  onSubmit() {
    if (this.gender && this.weight && this.height && this.age) {
      if (this.gender === 'male') {
        this.dailyCaloricExpenditure = Math.round(((10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5) * 1.375);
      } else if (this.gender === 'female') {
        this.dailyCaloricExpenditure = Math.round(((10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161) * 1.375);
      }

      this.dailyProteinIntake = this.weight; // 1 gram per kg of weight
      this.dailyCarbIntake = Math.round((this.dailyCaloricExpenditure / 2) * 0.25); // Half the daily caloric expenditure multiplied by 0.25

      this.vitalStatusService.setVitalStatus(this.fitnessGoal, this.gender, this.height, this.weight, this.age, this.weeklyAvailability, this.dailyCaloricExpenditure, this.dailyProteinIntake, this.dailyCarbIntake);
      this.navigateTo('/createDietPlan');
    }
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
