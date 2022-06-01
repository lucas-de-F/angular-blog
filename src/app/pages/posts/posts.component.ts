import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;
  categories: any;
  constructor(private postServices: PostService, private router: Router) { }

  ngOnInit(): void {
    this.getPosts()
  }
  getPosts() {
    this.postServices
    .getPosts()
    .subscribe(
      (res: any) => {
        this.posts = res
        this.categories = res.map((post: any) => post.categories.map((categorie: any) => ({ id: post.id , categories: categorie.name})))
      },
      (err: any) => console.log(err)
    )
  }

  redirect() {
    this.router.navigateByUrl('/users')
  }
}
