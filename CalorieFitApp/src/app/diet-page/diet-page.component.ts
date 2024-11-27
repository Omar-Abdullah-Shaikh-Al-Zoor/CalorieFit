
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { VitalStatusService } from '../vital-status.service'; // Import the service

@Component({
  selector: 'app-diet-page',
  templateUrl: './diet-page.component.html',
  styleUrls: ['./diet-page.component.css'] // Note: styleUrls (plural) not styleUrl
})
export class DietPageComponent implements OnInit {
  calorieLossInput: number = 0;
  calorieLossResult: string = '';
  selectedRange: number | null = null;

  // Variables to hold data from the service
  dailyCaloricExpenditure: number | null = null;
  dailyProteinIntake: number | null = null;
  dailyCarbIntake: number |  null = null;
  fitnessGoal: string | null = null;

  constructor(private router: Router, private vitalStatusService: VitalStatusService) {}

  ngOnInit(): void {
    const vitalStatus = this.vitalStatusService.getVitalStatus();
    if (vitalStatus) {
      this.dailyCaloricExpenditure = vitalStatus.dailyCaloricExpenditure;
      this.dailyProteinIntake = vitalStatus.dailyProteinIntake;
      this.dailyCarbIntake = vitalStatus.dailyCarbIntake;
      this.fitnessGoal = vitalStatus.fitnessGoal;
    } else {
      console.error('Vital status data is not available. Please ensure setVitalStatus() is called before accessing this page.');
      // Provide default values to avoid errors
      this.dailyCaloricExpenditure = 0;
      this.dailyProteinIntake = 0;
      this.dailyCarbIntake = 0;
      this.fitnessGoal = 'Unknown';
    }
  }


  navigateToworkout(): void {
    this.router.navigate(['/workout-page']); // Ensure 'workout-page' is a valid route in your app
  }

  showMealPlan() {
    if (this.dailyCaloricExpenditure) {
      if (this.dailyCaloricExpenditure >= 1000 && this.dailyCaloricExpenditure < 2000) {
        this.selectedRange = 1000;
        this.calorieLossResult = 'Showing meal plan for 1000-1999 calories.';
      } else if (this.dailyCaloricExpenditure >= 2000 && this.dailyCaloricExpenditure < 3000) {
        this.selectedRange = 2000;
        this.calorieLossResult = 'Showing meal plan for 2000-2999 calories.';
      } else if (this.dailyCaloricExpenditure >= 3000 && this.dailyCaloricExpenditure < 4000) {
        this.selectedRange = 3000;
        this.calorieLossResult = 'Showing meal plan for 3000-3999 calories.';
      } else if (this.dailyCaloricExpenditure >= 4000 && this.dailyCaloricExpenditure < 5000) {
        this.selectedRange = 4000;
        this.calorieLossResult = 'Showing meal plan for 4000-4999 calories.';
      } else if (this.dailyCaloricExpenditure >= 5000 && this.dailyCaloricExpenditure < 6000) {
        this.selectedRange = 5000;
        this.calorieLossResult = 'Showing meal plan for 5000-5999 calories.';
      } else if (this.dailyCaloricExpenditure >= 6000) {
        this.selectedRange = 6000;
        this.calorieLossResult = 'Showing meal plan for 6000+ calories.';
      } else {
        this.selectedRange = null ;
        this.calorieLossResult = 'No meal plan available for this caloric expenditure.';
      }
    } else {
      this.selectedRange = null;
      this.calorieLossResult = 'Daily caloric expenditure is not available.';
    }
  }
}
