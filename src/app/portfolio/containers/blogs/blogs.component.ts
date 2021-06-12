import { Component, OnInit } from '@angular/core';

import { BlogModel } from '../../models/blog.model';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: BlogModel[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.blogsService.getData()
      .subscribe(data => this.blogs = data);
  }
}
