import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AttendanceRecord } from '../attendance-record'; 
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-showattendance',
  templateUrl: './showattendance.component.html',
  styleUrls: ['./showattendance.component.css'],
})
export class ShowattendanceComponent implements OnInit {
  attendanceRecords: AttendanceRecord[] = []; // Use the interface here

  employeeId: string = '';
  selectedDate: string = '';

  constructor(private http: HttpClient,private attendanceService: AttendanceService) {}

  ngOnInit() {
    this.fetchAttendanceRecords();
  }

  // Fetch attendance records from backend
  fetchAttendanceRecords() {
    this.http.get<any[]>('http://localhost:8070/api/v1/attendance').subscribe(
      (data) => {
        this.attendanceRecords = data;  // Data now includes employeeName
      },
      (error) => {
        console.error('Error fetching attendance records:', error);
      }
    );
  }




  // Fetch attendance records based on filters
  onSearch() {
    this.attendanceService
      .getAttendanceRecordsByFilter(this.employeeId, this.selectedDate)
      .subscribe(
        (data) => {
          this.attendanceRecords = data;
        },
        (error) => {
          console.error('Error fetching attendance records:', error);
        }
      );
  }



  
}
