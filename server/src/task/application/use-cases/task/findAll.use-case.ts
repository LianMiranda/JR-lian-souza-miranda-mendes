import { Inject, Injectable } from '@nestjs/common';
import { CustomError } from 'src/shared/errors/custom-error';
import { ITaskRepository } from 'src/task/domain/repositories/task.repository.interface';

@Injectable()
export class FindAllTasksUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepository: ITaskRepository,
  ) {}
  async execute() {
    const tasks = await this.taskRepository.findAll();

    if (tasks.length === 0) {
      throw new CustomError('No tasks found', 404);
    }

    return tasks;
  }
}
