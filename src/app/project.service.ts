import { Injectable } from '@angular/core';
import { Project } from './models/projects.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase){
    this.projects = database.list('projects');
  }

  getProjects(){
    console.log(this.projects);
    return this.projects;
  }

  getProjectById(projectId){
    return this.database.object('projects/' + projectId);
  }

  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({pledgedAmount: localUpdatedProject.pledgedAmount});
    }

  }
