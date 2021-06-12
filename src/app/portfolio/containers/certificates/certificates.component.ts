import { Component, OnInit } from '@angular/core';

import { Certificate } from '../../models/certificate.model';
import { CertificatesService } from '../../services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[];

  constructor(private certificatesService: CertificatesService) { }

  ngOnInit(): void {
    this.certificatesService.getFormFields()
      .subscribe(data => this.certificates = data);
  }
}
