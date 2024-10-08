import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  template: `
    <h1>Unauthorized Access</h1>
    <p>You do not have permission to view this page.</p>
  `,
  styles: [`
    h1 {
      color: red;
      text-align: center;
      margin-top: 20px;
    }
    p {
      text-align: center;
    }
  `]
})
export class UnauthorizedComponent {}
