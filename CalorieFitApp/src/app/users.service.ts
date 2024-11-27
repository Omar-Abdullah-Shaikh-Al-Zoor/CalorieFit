import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  private userDetails: {
    user_id: number;
    email: string;
    first_name: string;
    last_name: string;
    is_admin: number;
  } | null = null;

  // Setter to save vital data
  setUserDetails(
    user_id: number, email: string,
    first_name: string,last_name: string, is_admin: number
  ): void
  {
    this.userDetails = { user_id, email, first_name, last_name, is_admin };
  }

  // Getter to retrieve vital data
  getUserDetails(): {
    user_id: number, email: string,
    first_name: string,last_name: string, is_admin: number
  } | null {
    return this.userDetails;
  }
}
