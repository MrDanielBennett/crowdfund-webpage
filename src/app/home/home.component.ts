import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  gotToDetailsPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key])
  }

}
