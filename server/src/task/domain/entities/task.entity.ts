import { v4 } from 'uuid';

enum TaskStatus {
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
