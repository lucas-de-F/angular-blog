import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get('http://localhost:3000/user');
  }

  UserLogin({ email, password }: { email: string, password: string }): Observable<any> {
    return this.http.post('http://localhost:3000/login', { email, password });
  }
}
