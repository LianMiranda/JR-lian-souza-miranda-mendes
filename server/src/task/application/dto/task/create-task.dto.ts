import { TaskStatus } from 'src/task/domain/entities/task.entity';

export class CreateTaskDto {
  title: string;
  description?: string;
  status: TaskStatus;
  project_id: string;
}
