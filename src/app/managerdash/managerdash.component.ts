//ManagerdashComponent.ts

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-managerdash',
  templateUrl: './managerdash.component.html',
  styleUrl: './managerdash.component.css'
})
export class ManagerdashComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

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
}
