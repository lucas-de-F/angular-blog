import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]);
  password = new FormControl('', [
    Validators.minLength(6)
  ]);
  confirmPassword = new FormControl('', [
    Validators.minLength(6),
  ]);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getErrorMessage(str: string) {
  }

  getSuccessMessage(str: string) {
  }

  redirect() {
    this.router.navigateByUrl('/posts')
  }

  login() {
    this.router.navigateByUrl('/login')
  }
}
