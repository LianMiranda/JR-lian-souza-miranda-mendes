import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from 'src/project/domain/repositories/project.repository.interface';
import { CustomError } from 'src/shared/errors/custom-error';
import { UpdateProjectDto } from '../../dto/project/update-project.dto';

@Injectable()
export class UpdateProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepository: IProjectRepository,
  ) {}

  async execute(id: string, input: UpdateProjectDto) {
    const project = await this.projectRepository.findById(id);

    if (!project) {
      throw new CustomError('Project not found', 404);
    }

    if (input.name) {
      project.updateName(input.name);
    }

    if (input.description) {
      project.updateDescription(input.description);
    }

    return await this.projectRepository.update(project);
  }
}
