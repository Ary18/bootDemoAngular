import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Commento } from '../models/commento';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }
estraiPost(): Observable<Post[]> {
  return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
}
estraiCommenti(id: number): Observable<Commento[]> {
  return this.http.get<Commento[]>('https://jsonplaceholder.typicode.com/comments?postId=' + id);
}
}
