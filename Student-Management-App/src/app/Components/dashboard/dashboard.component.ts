import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  students = [
    { name: 'Jane Smith', email: 'jane.smith@example.com', course: 'Computer Science' },
    { name: 'John Doe', email: 'john.doe@example.com', course: 'Mathematics' },
    { name: 'Lisa Adams', email: 'lisa.adams@example.com', course: 'History' },
  ];
}

