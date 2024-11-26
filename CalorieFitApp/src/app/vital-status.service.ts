import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Ensures the service is a singleton
})
export class VitalStatusService {
  constructor() {}

  private vitalStatus: {
      fitnessGoal: string;
      gender: string;
      height: number;
      weight: number;
      age: number;
      dailyCaloricExpenditure: number;
      dailyProteinIntake : number;
      dailyCarbIntake : number;
    } | null = null;

  // Setter to save vital data
  setVitalStatus(
      fitnessGoal: string, gender: string,
      height: number, weight: number, age: number,
      dailyCaloricExpenditure: number,
      dailyProteinIntake : number,
      dailyCarbIntake : number): void
  {
    this.vitalStatus = { fitnessGoal, gender, height, weight, age, dailyCaloricExpenditure, dailyProteinIntake, dailyCarbIntake };
  }

  // Getter to retrieve vital data
  getVitalStatus(): {
    fitnessGoal: string, gender: string,
    height: number, weight: number, age: number,
    dailyCaloricExpenditure: number,
    dailyProteinIntake : number,
    dailyCarbIntake : number
  } | null {
    return this.vitalStatus;
  }
}
