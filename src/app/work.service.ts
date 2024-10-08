import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private apiUrl = 'http://localhost:8070/api/v1/work'; // Backend API URL

  constructor(private http: HttpClient) { }

  // Method to send work details to the backend
  addWork(workData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, workData); // Expecting JSON response
  }


  // Add this method in WorkService

  getAllWork(): Observable<any[]> {
    // Remove the extra /work at the end of the URL
    return this.http.get<any[]>(`${this.apiUrl}`);
  }









  getFilteredWork(employeeId?: string, date?: string): Observable<any[]> {
    let params: any = {};
    if (employeeId) {
      params.employeeId = employeeId;
    }
    if (date) {
      params.date = date;
    }

    return this.http.get<any[]>(`${this.apiUrl}/search`, { params });
  }
  


  
}
