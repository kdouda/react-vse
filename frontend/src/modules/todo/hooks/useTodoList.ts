import { type TodoItem, type TodoItemId } from '../types';

export function useTodoList() {
  const items = INITIAL_ITEMS;

  const addItem = (item: Omit<TodoItem, 'id'>) => {
    // TODO
  };

  const setItemIsCompleted = (id: TodoItemId, isCompleted: boolean) => {
    // TODO
  };

  const removeItem = (id: TodoItemId) => {
    // TODO
  };

  return {
    items,
    addItem,
    setItemIsCompleted,
    removeItem,
  };
}

const INITIAL_ITEMS: Array<TodoItem> = [
  {
    id: 1,
    description: 'go grocery shopping',
    isCompleted: true,
  },
  {
    id: 2,
    description: 'wash the dishes',
    isCompleted: true,
  },
  {
    id: 3,
    description: 'write some React code',
    isCompleted: false,
  },
];
