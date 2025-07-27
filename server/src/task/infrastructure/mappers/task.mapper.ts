import { Task } from 'src/task/domain/entities/task.entity';

export class TaskMapper {
  static toDomain(model: any): Task {
    return Task.fromDatabase({
      id: model.id,
      name: model.name,
      description: model.description || '',
      created_at: model.created_at,
      updated_at: model.updated_at,
    });
  }

  static toDomainArray(models: any[]): Task[] {
    return models.map((model) => this.toDomain(model));
  }
}
