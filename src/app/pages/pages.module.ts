import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    PostsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
