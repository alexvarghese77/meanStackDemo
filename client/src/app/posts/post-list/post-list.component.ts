import { Component, OnInit, } from '@angular/core';
import { Post } from './../post.modal'
import { PostService } from './../post.service'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // post: Post[] = [];
  post: any = [];
  private postSub: Subscription;
  constructor(public postService: PostService) { }

  ngOnInit() {
    this.post = this.postService.getPost().subscribe(posts => {
      this.post = posts;
    });
    this.postSub = this.postService.getPostUpdateListener().subscribe((post: Post[]) => {
      this.post = post;
    })
  }
  // ngOnDestroy() {
  //   this.postSub.unsubscribe();
  // }
}
