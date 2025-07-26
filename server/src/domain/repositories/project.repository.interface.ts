import { Project } from 'src/domain/entities/project.entity';
import { BaseRepositoryInterface } from './base.repository.interface';

export interface IProjectRepository extends BaseRepositoryInterface<Project> {
  save(value: Project): Promise<void>;
  findAll(): Promise<Project[]>;
  findById(id: string): Promise<Project | null>;
  update(id: string, value: Partial<Project>): Promise<boolean>;
  delete(id: string): Promise<void>;
}
