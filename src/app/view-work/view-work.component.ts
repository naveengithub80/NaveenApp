import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.component.css']
})
export class ViewWorkComponent implements OnInit {
  workDetails: any[] = [];
  filteredWorkDetails: any[] = [];
  searchEmployeeId: string = '';
  selectedDate: string = '';

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.getWorkDetails();
  }

  getWorkDetails(): void {
    this.workService.getAllWork().subscribe(
      data => {
        this.workDetails = data;
        this.filteredWorkDetails = data;  // Initialize with all data
      },
      error => {
        console.log('Error fetching work details', error);
      }
    );
  }

  filterWorkDetails(): void {
    this.filteredWorkDetails = this.workDetails.filter(work => {
      const matchesEmployeeId = !this.searchEmployeeId || work.employeeId.toString().includes(this.searchEmployeeId);
      const matchesDate = !this.selectedDate || work.workDate === this.selectedDate;
      return matchesEmployeeId && matchesDate;
    });
  }
}
