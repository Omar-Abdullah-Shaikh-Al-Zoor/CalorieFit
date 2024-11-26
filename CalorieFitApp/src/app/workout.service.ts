import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout } from '../app/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private apiUrl = 'http://localhost:5000/api/workout';

  constructor(private http: HttpClient) { }

  getWorkoutPlan(frequency: string): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.apiUrl}/${frequency}`);
  }
}