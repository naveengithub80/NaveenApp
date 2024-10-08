import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminauthService } from './adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate {

  constructor(private adminAuthService: AdminauthService, private router: Router) { }

  canActivate(): boolean {
    if (this.adminAuthService.isUserLoggedIn() && this.adminAuthService.isAdmin()) {
      return true;  // Allow access if the user is logged in and has an admin role
    } else {
      // If not an admin, redirect to some unauthorized page or login
      this.router.navigate(['/unauthorized']);  // Redirect if unauthorized
      return false;
    }
  }
}
