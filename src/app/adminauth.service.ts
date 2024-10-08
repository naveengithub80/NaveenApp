import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  private loggedInUserRole: string = '';

  authenticate(username: string, password: string): boolean {
    if (username === 'adminUser' && password === 'adminPass') {
      this.loggedInUserRole = 'admin';
      sessionStorage.setItem('role', 'admin');
      return true;
    } else if (username === 'employeeUser' && password === 'employeePass') {
      this.loggedInUserRole = 'employee';
      sessionStorage.setItem('role', 'employee');
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    return sessionStorage.getItem('role') === 'admin';
  }

  isUserLoggedIn(): boolean {
    return sessionStorage.getItem('role') !== null;
  }

  logout() {
    sessionStorage.clear();
  }
}
