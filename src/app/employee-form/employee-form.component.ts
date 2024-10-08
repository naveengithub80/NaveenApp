//employee-form.ts
import { Component } from '@angular/core';
import { Employee } from '../employee'; // Assuming you have an Employee model defined in '../employee'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  employee: Employee = {
    id: 0,
    employeeName: '',
    role: '',
    salary: 0,
    qualification: '',
    dateOfJoin: '',
    email: '',
    address: '',
    photo: '' // Photo will be handled through FormData
  };

  selectedFile: File | null = null; // For storing the selected file
  photoPreview: string | ArrayBuffer | null = null; // For displaying photo preview

  constructor(private http: HttpClient, private router: Router) {}

  // Handles the file input change event
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0]; // Store the file

      // Create a file reader to generate a preview
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreview = reader.result; // Set the preview URL
      };
      reader.readAsDataURL(this.selectedFile); // Read file as data URL for preview
    }
  }

  // Submit the employee form
onSubmit() {
  const formData = new FormData(); // FormData object to send employee data along with the file

  // Append employee fields to the FormData object
  formData.append('employeeName', this.employee.employeeName);
  formData.append('role', this.employee.role);
  formData.append('salary', this.employee.salary.toString()); // Salary needs to be stringified
  formData.append('qualification', this.employee.qualification);
  formData.append('dateOfJoin', this.employee.dateOfJoin);
  formData.append('email', this.employee.email);
  formData.append('address', this.employee.address);

  // Append the photo file to the FormData if it's selected
  if (this.selectedFile) {
    formData.append('photo', this.selectedFile); // Add the file to the form data
  }

  // Send a POST request with FormData to the back-end API
  this.http.post('http://localhost:8070/api/v1/employees', formData, { responseType: 'text' }).subscribe(
    response => {
      console.log('Response from server:', response);
      alert('Employee added successfully!');
      
      // Reset the form and file input after success
      this.resetForm();
      
      // Check the role in sessionStorage and redirect accordingly
      const role = sessionStorage.getItem('role');
      if (role === 'admin') {
        this.router.navigate(['/admindash']); // Redirect to admin dashboard
      } else if (role === 'manager') {
        this.router.navigate(['/managerdash']); // Redirect to manager dashboard
      }
    },
    error => {
      console.error('Error adding employee:', error);
      alert('Error adding employee: ' + error.message);
    }
  );
}


  // Method to reset form and file input after submission
  resetForm() {
    this.employee = {
      id: 0,
      employeeName: '',
      role: '',
      salary: 0,
      qualification: '',
      dateOfJoin: '',
      email: '',
      address: '',
      photo: ''
    };
    this.selectedFile = null;
    this.photoPreview = null;
  }
}
