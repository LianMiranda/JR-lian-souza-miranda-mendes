import { Inject, Injectable } from '@nestjs/common';
import { CustomError } from 'src/shared/errors/custom-error';
import { ITaskRepository } from 'src/task/domain/repositories/task.repository.interface';

@Injectable()
export class FindTaskByProjectIdUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepository: ITaskRepository,
  ) {}
  async execute(id: string) {
    const task = await this.taskRepository.findByProjectId(id);

    if (task.length == 0) {
      throw new CustomError('Tasks not found', 404);
    }

    return task;
  }
}
