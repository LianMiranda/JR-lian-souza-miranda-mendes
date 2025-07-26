export interface BaseRepositoryInterface<T> {
  save(value: T): Promise<void>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  update(value: T): Promise<T>;
  delete(id: string): Promise<void>;
}
