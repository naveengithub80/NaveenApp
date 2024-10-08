import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminauthService } from './adminauth.service';  // Assuming you already have this service
import { ManagerauthService } from './managerauth.service';  // Assuming you already have this service

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(
    private adminAuthService: AdminauthService, 
    private managerAuthService: ManagerauthService, 
    private router: Router
  ) {}

  canActivate(): boolean {
    const isAdmin = this.adminAuthService.isUserLoggedIn() && this.adminAuthService.isAdmin();
    const isManager = this.managerAuthService.isUserLoggedIn();

    if (isAdmin || isManager) {
      return true;
    }

    this.router.navigate(['/unauthorized']);
    return false;
  }
}
