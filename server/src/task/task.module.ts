import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskController } from './presentation/controllers/task.controller';
import { TaskModel } from 'src/shared/infrastructure/database/models/task.model';
import { TaskRepository } from './infrastructure/repositories/task.repository';
import { CreateTaskUseCase } from './application/use-cases/task/create.use-case';
import { FindAllTasksUseCase } from './application/use-cases/task/findAll.use-case';
import { FindTaskByIdUseCase } from './application/use-cases/task/findById.use-case';
import { UpdateTaskUseCase } from './application/use-cases/task/update.use-case';
import { DeleteTaskUseCase } from './application/use-cases/task/delete.use-case';
import { FindTaskByProjectIdUseCase } from './application/use-cases/task/findByProjectId.use-case';

@Module({
  imports: [SequelizeModule.forFeature([TaskModel])],
  controllers: [TaskController],
  providers: [
    TaskRepository,
    {
      provide: 'ITaskRepository',
      useExisting: TaskRepository,
    },
    CreateTaskUseCase,
    FindAllTasksUseCase,
    FindTaskByIdUseCase,
    FindTaskByProjectIdUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
  ],
  exports: ['ITaskRepository'],
})
export class TaskModule {}
