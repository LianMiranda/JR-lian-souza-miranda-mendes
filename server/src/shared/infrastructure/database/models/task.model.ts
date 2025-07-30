import {
  Model,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  Default,
} from 'sequelize-typescript';
import { ProjectModel } from './project.model';
import { UUIDV4 } from 'sequelize';

@Table({ tableName: 'Task' })
export class TaskModel extends Model {
  @PrimaryKey
  @Default(UUIDV4)
  @Column({ type: DataType.UUID, unique: true })
  id: string;

  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.ENUM('todo', 'doing', 'done') })
  status: 'todo' | 'doing' | 'done';

  @ForeignKey(() => ProjectModel)
  @Column({ type: DataType.UUID })
  project_id: string;

  @BelongsTo(() => ProjectModel)
  project: ProjectModel;

  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  updated_at: Date;
}
