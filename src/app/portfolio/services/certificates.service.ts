import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Certificate } from '../models/certificate.model';

@Injectable()
export class CertificatesService {
  private url = 'assets/data/certificates.json';

  constructor(private http: HttpClient) {}

  getFormFields(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.url);
  }
}
