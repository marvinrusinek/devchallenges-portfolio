import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BackendSkillsModel } from '../models/backend-skills.model';

@Injectable()
export class BackendSkillsService {
  private url = 'assets/data/backend-skills.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<BackendSkillsModel[]> {
    return this.http.get<BackendSkillsModel[]>(this.url);
  }
}
