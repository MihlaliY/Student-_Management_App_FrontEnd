import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://localhost:8081/auth'


  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`,{
      email,
      password
    });
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user)
  }
}
