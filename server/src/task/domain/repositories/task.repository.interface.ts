import { BaseRepositoryInterface } from 'src/shared/domain/repositories/base.repository.interface';
import { Task } from '../entities/task.entity';

export interface ITaskRepository extends BaseRepositoryInterface<Task> {
  save(value: Task): Promise<void>;
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task | null>;
  update(value: Task): Promise<Task>;
  delete(id: string): Promise<void>;
}
