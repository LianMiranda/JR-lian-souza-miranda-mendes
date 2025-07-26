import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProjectDto } from 'src/project/application/dto/project/create-project.dto';
import { UpdateProjectDto } from 'src/project/application/dto/project/update-project.dto';
import { CreateProjectUseCase } from 'src/project/application/use-cases/project/create.use-case';
import { DeleteProjectUseCase } from 'src/project/application/use-cases/project/delete.use-case';
import { FindAllProjectsUseCase } from 'src/project/application/use-cases/project/findAll.use-case';
import { FindProjectByIdUseCase } from 'src/project/application/use-cases/project/findById.use-case';
import { UpdateProjectUseCase } from 'src/project/application/use-cases/project/update.use-case';

@Controller('projects')
export class ProjectController {
  @Inject(CreateProjectUseCase)
  private readonly createProjectUseCase: CreateProjectUseCase;
  @Inject(FindAllProjectsUseCase)
  private readonly findAllProjectsUseCase: FindAllProjectsUseCase;
  @Inject(FindProjectByIdUseCase)
  private readonly findProjectByIdUseCase: FindProjectByIdUseCase;
  @Inject(DeleteProjectUseCase)
  private readonly deleteProjectUseCase: DeleteProjectUseCase;
  @Inject(UpdateProjectUseCase)
  private readonly updateProjectUseCase: UpdateProjectUseCase;

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.createProjectUseCase.execute(createProjectDto);
  }

  @Get()
  findAll() {
    return this.findAllProjectsUseCase.execute();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.findProjectByIdUseCase.execute(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.updateProjectUseCase.execute(id, updateProjectDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteProjectUseCase.execute(id);
  }
}
