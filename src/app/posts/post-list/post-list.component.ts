import { Component, OnInit, } from '@angular/core';
import { Post } from './../post.modal'
import { PostService } from './../post.service'
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy {
  post: Post[] = [];
  private postSub:Subscription;
  constructor(public postService: PostService) { }

  ngOnInit() {
    this.post = this.postService.getPost();
    this.postSub=this.postService.getPostUpdateListener().subscribe((post: Post[])=>{
this.post=post;
    })
  }
  ngOnDestroy(){
    this.postSub.unsubscribe();
  }
}
