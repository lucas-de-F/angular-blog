import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
      this.userService.getUser().subscribe(
        (res: any) => this.users = res,
        (err: any) => console.log(err)
      );
  }

  redirectToUser(id: string): void {
    this.router.navigateByUrl(`/users/${id}`)
  }

  redirect() {
    this.router.navigateByUrl('/posts')
  }
}
