import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtItils = new JwtHelperService()

  constructor() { }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false
    }
    try {
      this.jwtItils.decodeToken(token);
      return true;
    } catch (Error) {
      return false;
    }
  }
}
