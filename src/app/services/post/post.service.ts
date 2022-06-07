import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `${localStorage.getItem('token')}`
    })
  };

  getPosts(): Observable<any> {
    return this.http.get('http://localhost:3000/post', this.httpOptions);
  }
}
