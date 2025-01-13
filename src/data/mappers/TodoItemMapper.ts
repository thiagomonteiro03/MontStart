import { TodoItemEntity } from '../entities/TodoItemEntity';
import { TodoItem } from '@/src/domain/models/TodoItem';

export const TodoItemMapper = {
  toEntity: (todoItem: TodoItem): TodoItemEntity => ({
    id: todoItem.id,
    name: todoItem.name,
    isChecked: todoItem.isChecked,
  }),
  toDomain: (todoItem: TodoItemEntity): TodoItem => ({
    id: todoItem.id,
    name: todoItem.name,
    isChecked: todoItem.isChecked,
  }),
};