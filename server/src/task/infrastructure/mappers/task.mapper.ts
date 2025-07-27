import { Task } from 'src/task/domain/entities/task.entity';

export class TaskMapper {
  static toDomain(model: any): Task {
    return Task.fromDatabase({
      id: model.id,
      title: model.title,
      description: model.description || '',
      status: model.status,
      project_id: model.project_id,
      created_at: model.created_at,
      updated_at: model.updated_at,
    });
  }

  static toDomainArray(models: any[]): Task[] {
    return models.map((model) => this.toDomain(model));
  }
}
