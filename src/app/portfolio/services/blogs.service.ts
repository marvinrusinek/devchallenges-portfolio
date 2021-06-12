import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BlogModel } from '../models/blog.model';

@Injectable()
export class BlogsService {
  private url = 'assets/data/blogs.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>(this.url);
  }
}
