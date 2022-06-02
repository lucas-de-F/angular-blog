import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

interface User {
  email: string;
  password: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string = ''

  email = new FormControl('lewishamilton@gmail.com', [
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]);
  password = new FormControl('', [
    Validators.minLength(6)
  ]);
  private jwtItils = new JwtHelperService()
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  getErrorMessage(str: string) {
  }
  getSuccessMessage(str: string) {
  }

  redirect() {
    this.router.navigateByUrl('/posts')
  }

  register() {
    this.router.navigateByUrl('/register')
  }
  public getToken(): string {
    return localStorage.getItem('token') as string;
  }

  public decodePayloadJWT(): any {
    try {
      return console.log(this.jwtItils.decodeToken(this.getToken()));
    } catch (Error) {
      this.router.navigateByUrl('/login')
      return null;
    }
  }
  login(): any {
    const data: User = { email: this.email.value, password: this.password.value }
    this.userService.UserLogin(data).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token)
        this.decodePayloadJWT()
        this.redirect()
      },
      (err: any) => {
        this.error = err.error.message
      }
    );
  }
}
