import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeauthService } from '../employeeauth.service'; 

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrl: './employeelogin.component.css'
})
export class EmployeeloginComponent {



  username:string='';
  password:string='';

  inValidLogin=false;

  constructor(private router: Router,private employeeauth:EmployeeauthService){}


  checkLogin(){


    if(this.employeeauth.authenticate(this.username,this.password)){

      
      this.router.navigate(['/employeedash']) 
      this.inValidLogin=false
     
    }
    else{
      this.inValidLogin=true;
      alert("wrong credintials")
      this.router.navigate(['home'])
      
      
    }


    
  }



}
