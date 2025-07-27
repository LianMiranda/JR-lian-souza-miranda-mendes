import { Inject, Injectable } from '@nestjs/common';
import { CustomError } from 'src/shared/errors/custom-error';
import { ITaskRepository } from 'src/task/domain/repositories/task.repository.interface';

@Injectable()
export class DeleteTaskUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepository: ITaskRepository,
  ) {}

  async execute(id: string) {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new CustomError('Task not found', 404);
    }

    await this.taskRepository.delete(id);
    return task;
  }
}
