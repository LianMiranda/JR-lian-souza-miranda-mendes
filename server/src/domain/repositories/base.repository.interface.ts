export interface BaseRepositoryInterface<T> {
  save(value: T): Promise<void>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  update(id: string, value: Partial<T>): Promise<boolean>;
  delete(id: string): Promise<void>;
}
