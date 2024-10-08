import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkService } from '../work.service'; 

@Component({
  selector: 'app-addwork',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.css']
})
export class AddworkComponent {
  workForm: FormGroup;
  message: string | null = null;
  messageClass: string = '';

  constructor(private fb: FormBuilder, private workService: WorkService) {
    this.workForm = this.fb.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      workDate: ['', Validators.required],
      workDetails: ['', Validators.required]
    });
  }

  // Method to submit form data
  onSubmit() {
    if (this.workForm.valid) {
      this.workService.addWork(this.workForm.value).subscribe(
        response => {
          // Set success message and class
          this.message = response.message;
          this.messageClass = 'success';

          // Clear the form after successful submission
          this.workForm.reset();

          // Clear the message after 3 seconds
          setTimeout(() => {
            this.message = null;
          }, 3000);
        },
        error => {
          // Set error message and class
          this.message = error.error.message || 'Error submitting work details';
          this.messageClass = 'error';

          // Clear the message after 3 seconds
          setTimeout(() => {
            this.message = null;
          }, 3000);
        }
      );
    }
  }
}
