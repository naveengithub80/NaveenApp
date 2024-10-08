// managerauthguard.service.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ManagerauthService } from './managerauth.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerAuthGuardService implements CanActivate {

  constructor(private managerAuthService: ManagerauthService, private router: Router) { }

  canActivate(): boolean {
    // Check if the role in session storage is 'manager'
    if (sessionStorage.getItem('role') === 'manager') {
      return true;
    }
    // If not authenticated, redirect to login
    this.router.navigate(['home']);
    return false;
  }
}




