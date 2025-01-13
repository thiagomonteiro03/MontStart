import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoItemEntity } from '../entities/TodoItemEntity';
import { TodoItemMapper } from '../mappers/TodoItemMapper';
import { TodoItem } from '@/src/domain/models/TodoItem';

const TODO_ITEMS_STORAGE_KEY = '@todo-items';

export const TodoItemRepository = {
  saveTodoItem: async (todoItem: TodoItem[]) => {
    const existingJsonValue = await AsyncStorage.getItem(TODO_ITEMS_STORAGE_KEY);
    const existingEntities: TodoItem[] = existingJsonValue ? JSON.parse(existingJsonValue) : [];
  
    const newEntities = todoItem.map(TodoItemMapper.toEntity);
    const updatedEntities = [...existingEntities, ...newEntities];
  
    const updatedJsonValue = JSON.stringify(updatedEntities);
    await AsyncStorage.setItem(TODO_ITEMS_STORAGE_KEY, updatedJsonValue);
  },

  loadTodoItem: async (): Promise<TodoItem[]> => {
    const jsonValue = await AsyncStorage.getItem(TODO_ITEMS_STORAGE_KEY);
    if (!jsonValue) return [];
    const entities: TodoItemEntity[] = JSON.parse(jsonValue);
    return entities.map(TodoItemMapper.toDomain);
  },
};