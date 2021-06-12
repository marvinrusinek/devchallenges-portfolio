import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProjectModel } from '../models/project.model';

@Injectable()
export class ProjectsService {
  private url = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.url);
  }
}
