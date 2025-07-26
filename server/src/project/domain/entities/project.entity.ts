import { v4 } from 'uuid';

export class Project {
  id?: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;

  constructor(name: string, description: string) {
    this.id = v4();
    this.name = name;
    this.description = description;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static fromDatabase(dbProject: any): Project {
    const project = new Project(dbProject.name, dbProject.description);

    project.id = dbProject.id;
    project.name = dbProject.name;
    project.description = dbProject.description || '';
    project.created_at = dbProject.created_at;
    project.updated_at = dbProject.updated_at;
    return project;
  }

  updateName(name: string): void {
    this.name = name;
  }

  updateDescription(description: string): void {
    this.description = description;
  }
}
