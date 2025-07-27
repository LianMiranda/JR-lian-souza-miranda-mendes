import { v4 } from 'uuid';

export enum TaskStatus {
  TODO = 'todo',
  DOING = 'doing',
  DONE = 'done',
}

export class Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  project_id: string;
  created_at: Date;
  updated_at: Date;

  constructor(title: string, project_id: string, description?: string) {
    this.id = v4();
    this.title = title;
    this.description = description;
    this.status = TaskStatus.TODO;
    this.project_id = project_id;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static fromDatabase(dbTask: any): Task {
    const task = new Task(dbTask.title, dbTask.project_id, dbTask.description);

    task.id = dbTask.id;
    task.title = dbTask.title;
    task.description = dbTask.description || '';
    task.status = dbTask.status;
    task.project_id = dbTask.project_id;
    task.created_at = dbTask.created_at;
    task.updated_at = dbTask.updated_at;

    return task;
  }

  updateTitle(newTitle: string): void {
    this.title = newTitle;
  }

  updateDescription(newDescription: string): void {
    this.description = newDescription;
  }

  updateStatus(newStatus: TaskStatus): void {
    this.status = newStatus;
  }
}
