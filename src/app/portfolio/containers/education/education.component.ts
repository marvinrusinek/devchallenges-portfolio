import { Component, OnInit } from '@angular/core';

import { EducationModel } from '../../models/education.model';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  schools: EducationModel[];

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.getFormFields()
      .subscribe(data => this.schools = data);
  }
}
