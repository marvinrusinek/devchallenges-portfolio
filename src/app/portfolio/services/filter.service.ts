import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Filter } from '../models/filter.model';

@Injectable()
export class FilterBtnService {
  private url = 'assets/data/filters.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<Filter[]> {
    return this.http.get<Filter[]>(this.url);
  }
}
