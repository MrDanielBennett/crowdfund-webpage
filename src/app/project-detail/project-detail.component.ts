import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/projects.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute, private location: Location,  private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
  });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
    console.log(this.projectToDisplay)
  }
}
