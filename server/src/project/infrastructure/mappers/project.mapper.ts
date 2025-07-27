import { Project } from 'src/project/domain/entities/project.entity';
import { TaskMapper } from 'src/task/infrastructure/mappers/task.mapper';

export class ProjectMapper {
  static toDomain(model: any): Project {
    return Project.fromDatabase({
      id: model.id,
      name: model.name,
      description: model.description || '',
      created_at: model.created_at,
      updated_at: model.updated_at,
      tasks: model.tasks?.map((task) => TaskMapper.toDomain(task)) ?? [],
    });
  }

  static toDomainArray(models: any[]): Project[] {
    return models.map((model) => this.toDomain(model));
  }
}
