import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth/auth.service';

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
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  redirect() {
    this.router.navigateByUrl('/posts')
  }

  ngOnInit(): void {
    this.authService.loggedIn() && this.redirect()
  }

  register() {
    this.router.navigateByUrl('/register')
  }
  public getToken(): string {
    return localStorage.getItem('token') as string;
  }

  login(): any {
    const data: User = { email: this.email.value, password: this.password.value }
    this.userService.UserLogin(data).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token)
        this.redirect()
      },
      (err: any) => {
        this.error = err.error.message
      }
    );
  }
}
