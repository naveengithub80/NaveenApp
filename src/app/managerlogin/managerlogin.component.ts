//ManagerloginComponent.ts
import { Component } from '@angular/core';
import { ManagerauthService } from '../managerauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.css']  // Fix this typo
})

export class ManagerloginComponent {

  username:string=''
  password:string=''
  inValidLogin=false;


  constructor(private managerauthService:ManagerauthService,private router:Router){

  }

  checkLogin() {
    if (this.managerauthService.authenticate(this.username, this.password)) {
      console.log('Login successful, navigating to managerdash');
      this.router.navigate(['managerdash']);
      this.inValidLogin = false;
    } else {
      this.inValidLogin = true;
      alert('Wrong Credentials');
      this.router.navigate(['home']);
    }
  }



}
