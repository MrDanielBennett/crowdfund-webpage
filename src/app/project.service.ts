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
}
