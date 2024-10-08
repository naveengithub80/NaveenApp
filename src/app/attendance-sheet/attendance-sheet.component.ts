import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AttendanceService } from '../attendance.service';

interface Attendance {
  employeeId: number;
  employeeName: string;
  status: string; // 'Present' or 'Absent'
  dateTime: string; // For simplicity, we can use string for the date and time
}

@Component({
  selector: 'app-attendance-sheet',
  templateUrl: './attendance-sheet.component.html',
  styleUrls: ['./attendance-sheet.component.css'],
})
export class AttendanceSheetComponent implements OnInit {
  employees: Attendance[] = []; // Hold employee attendance records
  currentDateTime: string = new Date().toISOString().slice(0, 16); // Current date and time

  constructor(private attendanceService: AttendanceService, private http: HttpClient) {}

  ngOnInit() {
    this.fetchEmployeeData(); // Fetch employee data on initialization
    console.log('Employees after fetching:', this.employees); // Check if employees are populated
  }
  

  // Fetch employee data
  fetchEmployeeData() {
    this.http.get<any[]>('http://localhost:8070/api/v1/employees').subscribe(
      (data) => {
        console.log('Fetched employee data:', data); // Log the response data
        this.employees = data.map((employee) => ({
          employeeId: employee.id,
          employeeName: employee.employeeName, // Ensure you access the correct property name
          status: 'Present', // Default status can be set
          dateTime: this.currentDateTime,
        }));
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }
  

  // Submit attendance records to backend
  submitAttendance() {
    const attendanceToSubmit = this.employees.map(employee => ({
      employeeId: employee.employeeId,
      status: employee.status,
      timestamp: employee.dateTime,
    }));

    this.attendanceService.recordAttendance(attendanceToSubmit).subscribe(() => {
      console.log('Attendance submitted successfully');
      alert('Attendance submitted successfully');
    }, error => {
      console.error('Error submitting attendance:', error);
      alert('Error submitting attendance');
    });
  }
}
