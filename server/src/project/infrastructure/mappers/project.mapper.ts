import { Project } from "src/project/domain/entities/project.entity";

export class ProjectMapper {
  static toDomain(model: any): Project {
    return Project.fromDatabase({
      id: model.id,
      name: model.name,
      description: model.description || '',
      created_at: model.created_at,
      updated_at: model.updated_at,
    });
  }

  static toDomainArray(models: any[]): Project[] {
    return models.map((model) => this.toDomain(model));
  }
}
