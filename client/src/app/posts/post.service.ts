import { Post } from './post.modal'
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
@Injectable({ providedIn: 'root' })
export class PostService {
    post: Post[] = [];
    private postUpdate=new Subject<Post[]>();
    getPost() {
        return this.post  
    }

    getPostUpdateListener(){
        return this.postUpdate.asObservable();
    }
    addPost(title: string, contet: string) {
        let newPost: Post = { title: title, content: contet }
        this.post.push(newPost);
        this.postUpdate.next([...this.post])
    }
}