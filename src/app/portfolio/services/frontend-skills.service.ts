import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FrontendSkillsModel } from '../models/frontend-skills.model';

@Injectable()
export class FrontendSkillsService {
  private url = 'assets/data/frontend-skills.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<FrontendSkillsModel[]> {
    return this.http.get<FrontendSkillsModel[]>(this.url);
  }
}
