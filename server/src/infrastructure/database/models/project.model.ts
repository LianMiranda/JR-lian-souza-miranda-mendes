import {
  Model,
  PrimaryKey,
  Column,
  CreatedAt,
  UpdatedAt,
  Table,
  DataType,
  Default,
  HasMany,
} from 'sequelize-typescript';
import { Task } from './task.model';

@Table({ tableName: 'Project' })
export class ProjectModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, unique: true })
  id: string;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  description?: string;

  @HasMany(() => Task)
  tasks: Task[];

  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  updated_at: Date;
}
