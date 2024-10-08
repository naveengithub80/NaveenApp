import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private baseUrl = 'http://localhost:8070/api/v1/attendance';

  constructor(private http: HttpClient) {}

  recordAttendance(attendance: any[]): Observable<any> {
    return this.http.post(this.baseUrl, attendance);
  }




   // Fetch all attendance records
   getAllAttendanceRecords(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  // Fetch attendance records by employeeId and date filter
  getAttendanceRecordsByFilter(employeeId: string, date: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search`, {
      params: {
        employeeId: employeeId || '',
        date: date || ''
      }
    });
  }






}
