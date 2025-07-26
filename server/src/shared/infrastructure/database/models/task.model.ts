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
} from 'sequelize-typescript';
import { ProjectModel } from './project.model';

@Table({ tableName: 'Task' })
export class Task extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUIDV4, unique: true })
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
