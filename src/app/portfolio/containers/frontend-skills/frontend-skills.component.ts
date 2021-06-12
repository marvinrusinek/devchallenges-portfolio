import { Component, OnInit } from '@angular/core';
import { FrontendSkillsModel } from '../../models/frontend-skills.model';
import { FrontendSkillsService } from '../../services/frontend-skills.service';

@Component({
  selector: 'app-frontend-skills',
  templateUrl: './frontend-skills.component.html',
  styleUrls: ['./frontend-skills.component.scss']
})
export class FrontendSkillsComponent implements OnInit {
  frontendSkills: FrontendSkillsModel[];

  constructor(private frontendSkillsService: FrontendSkillsService) { }

  ngOnInit(): void {
    this.frontendSkillsService.getData()
      .subscribe(data => this.frontendSkills = data);
  }
}
