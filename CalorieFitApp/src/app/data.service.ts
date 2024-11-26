// angular-app/src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }
  reset_password_email(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password-email`, { email });
  }
  validate_email(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/validate-email`, { email });
  }
}
