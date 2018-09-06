import { Component, OnInit, } from '@angular/core';
import { Post } from './../post.modal'
import { PostService } from './../post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post: Post[] = [];
  constructor(public postService: PostService) { }

  ngOnInit() {
    this.post = this.postService.getPost()
  }
}
