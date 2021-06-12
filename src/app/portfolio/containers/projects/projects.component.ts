import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ProjectsService } from '../../services/projects.service';
import { ProjectModel } from '../../models/project.model';
import { FilterBtnService } from '../../services/filter.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() filterBy = 'resp';
  filters = [];
  projects: ProjectModel[];
  page = 1;

  constructor(private projectsService: ProjectsService, private filterBtnService: FilterBtnService) {}

  ngOnInit(): void {
    this.filterBtnService.getData()
      .subscribe(data => this.filters = data);

    this.projectsService.getData()
      .pipe(map(projects => projects.sort((a, b) => new Date(b.dateCompleted).getTime() - new Date(a.dateCompleted).getTime())))
      .subscribe(data => this.projects = data);
  }
}
