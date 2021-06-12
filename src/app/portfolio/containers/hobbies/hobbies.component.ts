import { Component, OnInit } from '@angular/core';

import { HobbyModel } from '../../models/hobby.model';
import { HobbiesService } from '../../services/hobbies.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  hobbies: HobbyModel[];

  constructor(private hobbiesService: HobbiesService) { }

  ngOnInit(): void {
    this.hobbiesService.getData()
      .subscribe(data => this.hobbies = data);
  }
}
