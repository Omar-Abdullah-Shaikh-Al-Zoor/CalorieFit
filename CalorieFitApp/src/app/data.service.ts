// angular-app/src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5000/api/data';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getUsers(): Observable<any> {
    console.log(this.http.get(this.apiUrl + '/users'))
    return this.http.get(this.apiUrl + '/users');
  }
}
