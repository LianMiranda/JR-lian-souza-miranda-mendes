import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from 'src/project/domain/repositories/project.repository.interface';
import { CustomError } from 'src/shared/errors/custom-error';

@Injectable()
export class DeleteProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository,
  ) {}

  async execute(id: string) {
    const project = await this.projectRepository.findById(id);

    if (!project) {
      throw new CustomError('Project not found', 404);
    }

    await this.projectRepository.delete(id);
    return project;
  }
}
