import { Component, OnInit } from '@angular/core';

import { BackendSkillsModel } from '../../models/backend-skills.model';
import { BackendSkillsService } from '../../services/backend-skills.service';

@Component({
  selector: 'app-backend-skills',
  templateUrl: './backend-skills.component.html',
  styleUrls: ['./backend-skills.component.scss']
})
export class BackendSkillsComponent implements OnInit {
  backendSkills: BackendSkillsModel[];

  constructor(private backendSkillsService: BackendSkillsService) { }

  ngOnInit(): void {
    this.backendSkillsService.getData()
      .subscribe(data => this.backendSkills = data);
  }
}
