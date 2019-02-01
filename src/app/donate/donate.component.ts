import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/projects.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  providers: [ProjectService]
})
export class DonateComponent implements OnInit {
@Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  donate(){

  }

}
