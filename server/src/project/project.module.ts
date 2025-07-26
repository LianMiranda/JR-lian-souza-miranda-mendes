import { Module } from '@nestjs/common';
import { ProjectController } from './presentation/controllers/project.controller';
import { CreateProjectUseCase } from './application/use-cases/project/create.use-case';
import { FindAllProjectsUseCase } from './application/use-cases/project/findAll.use-case';
import { FindProjectByIdUseCase } from './application/use-cases/project/findById.use-case';
import { UpdateProjectUseCase } from './application/use-cases/project/update.use-case';
import { DeleteProjectUseCase } from './application/use-cases/project/delete.use-case';
import { ProjectRepository } from './infrastructure/repositories/project.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectModel } from 'src/shared/infrastructure/database/models/project.model';

@Module({
  imports: [SequelizeModule.forFeature([ProjectModel])],
  controllers: [ProjectController],
  providers: [
    ProjectRepository,
    {
      provide: 'IProjectRepository',
      useExisting: ProjectRepository,
    },
    CreateProjectUseCase,
    FindAllProjectsUseCase,
    FindProjectByIdUseCase,
    UpdateProjectUseCase,
    DeleteProjectUseCase,
  ],
  exports: ['IProjectRepository'],
})
export class ProjectModule {}
