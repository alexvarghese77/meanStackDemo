import { Component, OnInit, } from '@angular/core';
import { Post } from './../post.modal'
import { NgForm } from '@angular/forms';
import { PostService } from './../post.service'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  newTitle = '';
  newPost = '';
  constructor(public postService: PostService) { }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = { title: form.value.title, content: form.value.content };
    debugger;
    this.postService.addPost(form.value.title, form.value.content)
  }
}
