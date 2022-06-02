import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { AuthService } from '../services/auth/auth.service';

@NgModule({
  declarations: [
    PostsComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class PagesModule { }
