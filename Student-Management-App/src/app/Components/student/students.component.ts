import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

export interface Student {
  studentID?: number;
  studentName: string;
  email: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentComponent {
  studentName = '';
  email = '';
  showForm = false;
    students: any[] = [];

  constructor(private studentService: StudentService) {}

  toggleForm(){
    this.showForm = !this.showForm;
  }

  saveStudent() {
    const student = {
      studentName: this.studentName,
      email: this.email,
    };

    this.studentService.addStudent(student).subscribe(
      () => {
        alert('Student added');
        this.studentName = '';
        this.email = '';
        this.students.push(student); // add to list
        this.studentName = '';
        this.email = '';
        this.showForm = false; 
      },


      
      (err) => {
        console.error(err);
        alert('Failed to add student');
      },
    );
  }
}
