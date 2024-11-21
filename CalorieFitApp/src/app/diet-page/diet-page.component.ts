import { Component } from '@angular/core';

@Component({
  selector: 'app-diet-page',
  templateUrl: './diet-page.component.html',
  styleUrls: ['./diet-page.component.css']  // Note: styleUrls (plural) not styleUrl
})
export class DietPageComponent {
  calorieLossInput: number = 0;
  calorieLossResult: string = '';
  selectedRange: number | null = null;

  showMealPlan() {
    if (this.calorieLossInput < 1000) {
      this.selectedRange = null;
      this.calorieLossResult = 'Please enter a value of 1000 or higher.';
    }
    else if (this.calorieLossInput >= 7000) {
      this.selectedRange = null;
      this.calorieLossResult = 'Please enter a value less than 7000 calories.';
    }
    else {
      if (this.calorieLossInput >= 1000 && this.calorieLossInput < 2000) {
        this.selectedRange = 1000;
        this.calorieLossResult = 'Showing meal plan for 1000 calories.';
      }
      else if (this.calorieLossInput >= 2000 && this.calorieLossInput < 3000) {
        this.selectedRange = 2000;
        this.calorieLossResult = 'Showing meal plan for 2000 calories.';
      }
      else if (this.calorieLossInput >= 3000 && this.calorieLossInput < 4000) {
        this.selectedRange = 3000;
        this.calorieLossResult = 'Showing meal plan for 3000 calories.';
      }
      else if (this.calorieLossInput >= 4000 && this.calorieLossInput < 5000) {
        this.selectedRange = 4000;
        this.calorieLossResult = 'Showing meal plan for 4000 calories.';
      }
      else if (this.calorieLossInput >= 5000 && this.calorieLossInput < 6000) {
        this.selectedRange = 5000;
        this.calorieLossResult = 'Showing meal plan for 5000 calories.';
      }
      else if (this.calorieLossInput >= 6000 && this.calorieLossInput < 7000) {
        this.selectedRange = 6000;
        this.calorieLossResult = 'Showing meal plan for 6000 calories.';
      }
    }
  }
}
