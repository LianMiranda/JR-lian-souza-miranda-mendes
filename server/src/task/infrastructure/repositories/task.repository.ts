import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaskModel } from 'src/shared/infrastructure/database/models/task.model';
import { Task } from 'src/task/domain/entities/task.entity';
import { ITaskRepository } from 'src/task/domain/repositories/task.repository.interface';
import { TaskMapper } from '../mappers/task.mapper';
import { CustomError } from 'src/shared/errors/custom-error';

@Injectable()
export class TaskRepository implements ITaskRepository {
  constructor(
    @InjectModel(TaskModel)
    private readonly taskModel: typeof TaskModel,
  ) {}

  async save(value: Task): Promise<void> {
    try {
      await this.taskModel.create({
        title: value.title,
        description: value.description,
        status: value.status,
        project_id: value.project_id,
      });
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new Error('Task with this ID already exists');
      }
      throw new Error(`Database error: ${error.message}`);
    }
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.taskModel.findAll();

    return TaskMapper.toDomainArray(tasks);
  }

  async findById(id: string): Promise<Task | null> {
    const task = await this.taskModel.findByPk(id);

    if (!task) {
      return null;
    }

    return TaskMapper.toDomain(task);
  }

  async update(value: Task): Promise<Task> {
    try {
      const [updatedRows] = await this.taskModel.update(value, {
        where: { id: value.id },
      });

      if (updatedRows === 0) {
        throw new CustomError('No rows were updated', 404);
      }

      return this.findById(value.id);
    } catch (error) {
      throw new CustomError('Failed to update task', 500);
    }
  }

  async delete(id: string): Promise<void> {
    await this.taskModel.destroy({ where: { id } });
  }
}
