// adminlogin.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {


  username:string='';
  password:string='';

  inValidLogin=false;

  constructor(private router: Router,private adminauth:AdminauthService){}


  checkLogin(){


    if(this.adminauth.authenticate(this.username,this.password)){

      
      this.router.navigate(['/admindash']) 
      this.inValidLogin=false
     
    }
    else{
      this.inValidLogin=true;
      alert("wrong credintials")
      this.router.navigate(['home'])
      
      
    }


    
  }




}
