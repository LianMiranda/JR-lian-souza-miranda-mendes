import { Inject, Injectable } from '@nestjs/common';
import { Project } from 'src/project/domain/entities/project.entity';
import { IProjectRepository } from 'src/project/domain/repositories/project.repository.interface';
import { CustomError } from 'src/shared/errors/custom-error';
import { CreateProjectDto } from '../../dto/project/create-project.dto';

@Injectable()
export class CreateProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository,
  ) {}

  async execute(input: CreateProjectDto) {
    if (!input.name) {
      throw new CustomError('Project name is required', 400);
    }

    const project = new Project(input.name, input.description);
    return await this.projectRepository.save(project);
  }
}
