import { Project } from 'src/domain/entities/project.entity';
import { BaseRepositoryInterface } from '../../../shared/domain/repositories/base.repository.interface';

export interface IProjectRepository extends BaseRepositoryInterface<Project> {
  save(value: Project): Promise<void>;
  findAll(): Promise<Project[]>;
  findById(id: string): Promise<Project | null>;
  update(value: Project): Promise<Project>;
  delete(id: string): Promise<void>;
}
