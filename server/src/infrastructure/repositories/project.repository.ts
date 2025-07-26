import { Project } from 'src/domain/entities/project.entity';
import { ProjectModel } from 'src/infrastructure/database/models/project.model';
import { IProjectRepository } from 'src/domain/repositories/project.repository.interface';
import { ProjectMapper } from '../mappers/project.mapper';

export class ProjectRepository implements IProjectRepository {
  constructor(private readonly projectModel: typeof ProjectModel) {}

  async save(value: Project): Promise<void> {
    try {
      await this.projectModel.create({
        name: value.name,
        description: value.description,
      });
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new Error('Project with this ID already exists');
      }
      throw new Error(`Database error: ${error.message}`);
    }
  }

  async findAll(): Promise<Project[]> {
    const projects = await this.projectModel.findAll();

    return ProjectMapper.toDomainArray(projects);
  }

  async findById(id: string): Promise<Project | null> {
    const project = await this.projectModel.findByPk(id);

    if (!project) {
      return null;
    }

    return ProjectMapper.toDomain(project);
  }

  async update(id: string, value: Partial<Project>): Promise<boolean> {
    const [updatedRows] = await this.projectModel.update(value, {
      where: { id },
    });

    return updatedRows > 0;
  }

  async delete(id: string): Promise<void> {
    await this.projectModel.destroy({ where: { id } });
  }
}
