import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from 'src/project/domain/repositories/project.repository.interface';
import { CustomError } from 'src/shared/errors/custom-error';

@Injectable()
export class FindAllProjectsUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository,
  ) {}
  async execute() {
    const projects = await this.projectRepository.findAll();

    if (projects.length === 0) {
      throw new CustomError('No projects found', 404);
    }

    return projects;
  }
}
