import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]);
  password = new FormControl('', [
    Validators.minLength(6)
  ]);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getErrorMessage(str: string) {
    console.log(`${str} INVÁLIDO`)
  }
  getSuccessMessage(str: string) {
    console.log(`${str} VÁLIDO`)
  }

  redirect() {
    this.router.navigateByUrl('/posts')
  }
}
