import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.getUserById(id)
  }

  getUserById(id: string): void {
    this.userService.getUserById(id).subscribe(
      (res: any) => this.user = res,
      (err: any) => console.log(err)
    );
  }

  redirect() {
    this.router.navigateByUrl('/users')
  }
}
