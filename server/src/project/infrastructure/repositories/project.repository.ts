import { IProjectRepository } from 'src/project/domain/repositories/project.repository.interface';
import { ProjectMapper } from '../mappers/project.mapper';
import { CustomError } from 'src/shared/errors/custom-error';
import { ProjectModel } from '../database/models/project.model';
import { Project } from 'src/project/domain/entities/project.entity';

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

  async update(value: Project): Promise<Project> {
    try {
      const [updatedRows] = await this.projectModel.update(value, {
        where: { id: value.id },
      });

      if (updatedRows === 0) {
        throw new CustomError('No rows were updated', 404);
      }

      return this.findById(value.id);
    } catch (error) {
      throw new CustomError('Failed to update project', 500);
    }
  }

  async delete(id: string): Promise<void> {
    await this.projectModel.destroy({ where: { id } });
  }
}
