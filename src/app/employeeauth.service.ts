import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeauthService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === 'employee' && password === 'employee123') {
      sessionStorage.setItem('username', username);  // Store the username
      sessionStorage.setItem('role', 'employee');    // Store the role
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    // Check if a username exists in sessionStorage
    let user = sessionStorage.getItem('username');
    return !(user == null);
  }

  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');  // Also clear the role on logout
  }
}
