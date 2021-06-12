import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ExperiencesModel } from '../models/experiences.model';

@Injectable()
export class ExperiencesService {
  private url = 'assets/data/experiences.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<ExperiencesModel[]> {
    return this.http.get<ExperiencesModel[]>(this.url);
  }
}
