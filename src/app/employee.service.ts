import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

 
  private apiUrl="http://localhost:8070/api/v1/employees"


  getEmployeeList():Observable<Employee []>{

    return this.httpClient.get<Employee[]>(`${this.apiUrl}`)

  }





  // Method to get an employee by ID
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.apiUrl}/${id}`);
  }




  // New method to get employee photo by ID (as a Blob)
  getEmployeePhoto(id: number): Observable<Blob> {
    return this.httpClient.get(`${this.apiUrl}/${id}/photo`, { responseType: 'blob' });
  }









}
