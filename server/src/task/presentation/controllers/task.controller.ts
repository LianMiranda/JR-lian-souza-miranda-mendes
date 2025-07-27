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
import { CreateTaskDto } from 'src/task/application/dto/task/create-task.dto';
import { UpdateTaskDto } from 'src/task/application/dto/task/update-task.dto';
import { CreateTaskUseCase } from 'src/task/application/use-cases/task/create.use-case';
import { DeleteTaskUseCase } from 'src/task/application/use-cases/task/delete.use-case';
import { FindAllTasksUseCase } from 'src/task/application/use-cases/task/findAll.use-case';
import { FindTaskByIdUseCase } from 'src/task/application/use-cases/task/findById.use-case';
import { FindTaskByProjectIdUseCase } from 'src/task/application/use-cases/task/findByProjectId.use-case';
import { UpdateTaskUseCase } from 'src/task/application/use-cases/task/update.use-case';

@Controller('tasks')
export class TaskController {
  @Inject(CreateTaskUseCase)
  private readonly createTaskUseCase: CreateTaskUseCase;
  @Inject(FindAllTasksUseCase)
  private readonly findAllTasksUseCase: FindAllTasksUseCase;
  @Inject(FindTaskByIdUseCase)
  private readonly findTaskByIdUseCase: FindTaskByIdUseCase;
  @Inject(FindTaskByProjectIdUseCase)
  private readonly findTaskByProjectIdUseCase: FindTaskByProjectIdUseCase;
  @Inject(DeleteTaskUseCase)
  private readonly deleteTaskUseCase: DeleteTaskUseCase;
  @Inject(UpdateTaskUseCase)
  private readonly updateTaskUseCase: UpdateTaskUseCase;

  @Post()
  create(@Body() createProjectDto: CreateTaskDto) {
    return this.createTaskUseCase.execute(createProjectDto);
  }

  @Get()
  findAll() {
    return this.findAllTasksUseCase.execute();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.findTaskByIdUseCase.execute(id);
  }

  @Get('project/:id')
  findByProjectId(@Param('id') id: string) {
    return this.findTaskByProjectIdUseCase.execute(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateTaskDto) {
    return this.updateTaskUseCase.execute(id, updateProjectDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteTaskUseCase.execute(id);
  }
}
