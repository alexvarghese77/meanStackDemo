import { Post } from './post.modal'
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class PostService {
    post: Post[] = [];
    getPost() {
        return this.post  
    }
    addPost(title: string, contet: string) {
        let newPost: Post = { title: title, content: contet }
        this.post.push(newPost);
    }
}