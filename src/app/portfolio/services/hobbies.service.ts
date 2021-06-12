import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HobbyModel } from '../models/hobby.model';

@Injectable()
export class HobbiesService {
  private url = 'assets/data/hobbies.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<HobbyModel[]> {
    return this.http.get<HobbyModel[]>(this.url);
  }
}
