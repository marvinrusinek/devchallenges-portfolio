import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EducationModel } from '../models/education.model';

@Injectable()
export class EducationService {
  private url = 'assets/data/education.json';

  constructor(private http: HttpClient) {}

  getFormFields(): Observable<EducationModel[]> {
    return this.http.get<EducationModel[]>(this.url);
  }
}
