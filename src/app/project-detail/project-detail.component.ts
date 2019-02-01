import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/projects.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  showFundForm: boolean = false;
  user;
  message: string;

  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private route: ActivatedRoute, private location: Location,  private projectService: ProjectService) {
    this.authService.user.subscribe(user => {
      if (user === null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
  });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
    console.log(this.projectToDisplay)
  }

  login() {
    this.authService.login();
  }


  fund(){
    if (this.isLoggedIn === true){
      this.showFundForm = true;
      this.message ="";
    }
    else if(this.isLoggedIn === false){
      this.showFundForm = false;
      this.message = "Please Login To Fund";
    }
  }

  // donate(){
  //
  // }
}
