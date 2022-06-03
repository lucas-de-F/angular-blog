import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { AuthService } from '../services/auth/auth.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    PostsComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class PagesModule { }
