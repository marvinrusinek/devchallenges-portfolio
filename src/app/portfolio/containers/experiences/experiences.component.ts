import { Component, OnInit } from '@angular/core';

import { ExperiencesModel } from '../../models/experiences.model';
import { ExperiencesService } from '../../services/experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  experiences: ExperiencesModel[];

  constructor(private experiencesService: ExperiencesService) { }

  ngOnInit(): void {
    this.experiencesService.getData()
      .subscribe(data => this.experiences = data);
  }

}
