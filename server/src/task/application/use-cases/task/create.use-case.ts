import { Inject, Injectable } from '@nestjs/common';
import { CustomError } from 'src/shared/errors/custom-error';
import { ITaskRepository } from 'src/task/domain/repositories/task.repository.interface';
import { CreateTaskDto } from '../../dto/task/create-task.dto';
import { Task } from 'src/task/domain/entities/task.entity';

@Injectable()
export class CreateTaskUseCase {
  constructor(
    @Inject('ITaskRepository')
    private readonly taskRepository: ITaskRepository,
  ) {}

  async execute(input: CreateTaskDto) {
    if (!input.title) throw new CustomError('Task title is required', 400);

    if (!input.project_id) throw new CustomError('Project id is required', 400);

    const task = new Task(
      input.title,
      input.project_id,
      input.status,
      input.description,
    );
    return await this.taskRepository.save(task);
  }
}
