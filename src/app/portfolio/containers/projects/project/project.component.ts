import { Component, Input, OnInit } from '@angular/core';

import { ProjectModel } from '../../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: ProjectModel;

  constructor() { }

  ngOnInit(): void {
  }

}
