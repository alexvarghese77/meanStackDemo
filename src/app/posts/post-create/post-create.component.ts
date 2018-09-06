import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newTitle = '';
  newPost = '';
  constructor() {}
  
  ngOnInit() {}
  onAddPost(postInput: HTMLTextAreaElement) {
    const post = { title: this.newTitle, content: this.newPost };
  }
}
