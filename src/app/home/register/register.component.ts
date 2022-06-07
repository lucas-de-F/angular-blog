import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  error = ''
  email = new FormControl('', [
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]);
  password = new FormControl('', [
    Validators.minLength(6)
  ]);
  confirmPassword = new FormControl('', [
    Validators.minLength(6),
  ]);

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }
  ngOnInit(): void {
  }

  redirect() {
    this.router.navigateByUrl('/posts')
  }

  register(): any {
    const data: User = { email: this.email.value, password: this.password.value }
    this.userService.UserRegister(data).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token)
        this.redirect()
      },
      (err: any) => {
        this.error = err.error.message
      }
    );
  }

  login() {
    this.router.navigateByUrl('/login')
  }
}
