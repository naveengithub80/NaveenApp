import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee'; 

@Component({
  selector: 'app-employeedash',
  templateUrl: './employeedash.component.html',
  styleUrls: ['./employeedash.component.css']
})
export class EmployeedashComponent {
  employeeId: number = 0;
  employee: Employee | null = null;
  errorMessage: string | null = null;
  photoUrl: string | null = null;  // Store photo URL here

  constructor(private employeeService: EmployeeService) {}

  // This is where you write the searchEmployee method
  searchEmployee() {
    if (this.employeeId > 0) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe({
        next: (data) => {
          this.employee = data;
          this.errorMessage = null;

          this.employeeService.getEmployeePhoto(this.employeeId).subscribe({
            next: (photoBlob) => {
              const reader = new FileReader();
              reader.readAsDataURL(photoBlob);
              reader.onloadend = () => {
                this.photoUrl = reader.result as string;
              };
            },
            error: (err) => {
              console.error('Error fetching photo:', err);
              this.photoUrl = null;
            }
          });
        },
        error: (err) => {
          console.error('Error fetching employee by ID:', err);
          this.employee = null;
          this.errorMessage = 'Employee not found';
        }
      });
    }
  }

  
}
