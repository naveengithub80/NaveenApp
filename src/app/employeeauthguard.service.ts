import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EmployeeauthService } from './employeeauth.service';  // Make sure this is the correct import

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuthGuardService implements CanActivate {

  // Fix the typo here: "constructor" was misspelled as "construct or"
  constructor(private employeeAuth: EmployeeauthService, private router: Router) { }

  canActivate(): boolean {
    if (this.employeeAuth.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/employeelogin']);
      return false;
    }
  }
}
