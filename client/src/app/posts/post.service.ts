import { Post } from './post.modal'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Http, Headers, RequestOptions } from '@angular/http';
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
        debugger;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let newPost: Post = { title: title, content: contet }
        let options = new RequestOptions({ headers: headers, method: "post", body: newPost, url: "http://localhost:3000/api/savepost" });
        this.http.post('http://localhost:3000/api/savepost', newPost, options);
        this.post.push(newPost);
        this.postUpdate.next([...this.post])
    }
}

