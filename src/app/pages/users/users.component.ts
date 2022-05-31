import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser() {
      this.userService.getUser().subscribe(
        (res: any) => this.users = res,
        (err: any) => console.log(err)
      );
  }
}
