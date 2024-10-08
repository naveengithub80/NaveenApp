import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,private adminauthService:AdminauthService,private router:Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  // Method to generate photo URL
  getEmployeePhotoUrl(employeeId: number): string {
    return `http://localhost:8070/api/v1/employees/${employeeId}/photo`;  // URL of the photo API
  }











  logout(){

    this.adminauthService.logout();
    this.router.navigate(['home'])

  }






}
