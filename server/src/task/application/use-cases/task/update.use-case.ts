import { Inject, Injectable } from '@nestjs/common';
import { CustomError } from 'src/shared/errors/custom-error';
import { ITaskRepository } from 'src/task/domain/repositories/task.repository.interface';
import { UpdateTaskDto } from '../../dto/task/update-task.dto';
import { TaskStatus } from 'src/task/domain/entities/task.entity';

@Injectable()
export class UpdateTaskUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepository: ITaskRepository,
  ) {}

  async execute(id: string, input: UpdateTaskDto) {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new CustomError('task not found', 404);
    }

    if (input.title) task.updateTitle(input.title);
    if (input.description) task.updateDescription(input.description);
    if (input.status) {
      if (!Object.values(TaskStatus).includes(input.status)) {
        throw new CustomError('Invalid status', 400);
      }

      task.updateStatus(input.status);
    }

    return await this.taskRepository.update(task);
  }
}
