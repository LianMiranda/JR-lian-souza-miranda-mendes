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
import { Project } from './project.model';

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

  @ForeignKey(() => Project)
  @Column({ type: DataType.UUID })
  project_id: string;

  @BelongsTo(() => Project)
  project: Project;

  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  updated_at: Date;
}
