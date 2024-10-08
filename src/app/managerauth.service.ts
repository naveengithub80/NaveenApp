import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerauthService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    // Check if the credentials match the manager role
    if (username === 'ravali' && password === 'ravali12') {
      sessionStorage.setItem('username', username);  // Store username
      sessionStorage.setItem('role', 'manager');     // Store role as manager
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    return sessionStorage.getItem('role') === 'manager';
  }

  logout() {
    sessionStorage.clear();
  }
}
