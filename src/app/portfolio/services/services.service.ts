import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Service } from '../models/service.model';

@Injectable()
export class ServicesService {
  private url = 'assets/data/services.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<Service[]> {
    return this.http.get<Service[]>(this.url);
  }
}
