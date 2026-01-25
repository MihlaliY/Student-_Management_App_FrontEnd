 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import { Student } from '../Components/student/students.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 private apiUrl = 'http://localhost:8081/students'

  constructor(private http: HttpClient){}

  addStudent(student: Student){
    return this.http.post(this.apiUrl, student);
  }

  getStudents(){
    return this.http.get(this.apiUrl)
  }

  updateStudent(id: number, student: any){
  return this.http.put(`${this.apiUrl}/${id}`, student)
}

deleteStudent(id: number){
  return this.http.delete(`${this.apiUrl}/${id}`)
}


}

