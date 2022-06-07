import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `${localStorage.getItem('token')}`
    })
  };

  getUser(): Observable<any> {
    return this.http.get('http://localhost:3000/user', this.httpOptions);
  }

  getUserById(id: string) {
    return this.http.get(`http://localhost:3000/user/${id}`, this.httpOptions);
  }

  UserLogin({ email, password }: { email: string, password: string }): Observable<any> {
    return this.http.post('http://localhost:3000/login', { email, password },  this.httpOptions);
  }
}
