import { PartialType } from '@nestjs/mapped-types';
import { TaskStatus } from 'src/task/domain/entities/task.entity';

class _UpdateTaskDto {
  title: string;
  description?: string;
  status: TaskStatus;
}

export class UpdateTaskDto extends PartialType(_UpdateTaskDto) {}
