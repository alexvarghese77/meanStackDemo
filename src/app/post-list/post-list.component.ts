import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post = [
    // { title: 'first', content: 'content' },
    // { title: 'second', content: 'content' },
    // { title: 'third', content: 'content' }
  ];
  constructor() {}

  ngOnInit() {}
}
