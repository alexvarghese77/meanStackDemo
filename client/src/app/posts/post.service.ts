import { Post } from './post.modal'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(private http: Http) {

    }
    post: Post[] = [];
    private postUpdate = new Subject<Post[]>();
    getPost() {
        //return this.post
        return this.http.get('http://localhost:3000/api/posts').pipe(map((response) => response.json()));
    }

    getPostUpdateListener() {
        return this.postUpdate.asObservable();
    }
    addPost(title: string, contet: string) {
        let newPost: Post = { title: title, content: contet }
        this.post.push(newPost);
        this.postUpdate.next([...this.post])
    }
}