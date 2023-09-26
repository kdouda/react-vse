import { useState } from 'react';

import { type TodoItem, type TodoItemId } from '../types';

export function useTodoList() {
  const [state, setState] = useState(INITIAL_STATE);

  const addItem = (item: Omit<TodoItem, 'id'>) => {
    setState((state) => {
      const newItem = {
        ...item,
        id: state.nextId,
      };

      return {
        ...state,
        items: [newItem, ...state.items],
        nextId: state.nextId + 1,
      };
    });
  };

  const setItemIsCompleted = (id: TodoItemId, isCompleted: boolean) => {
    setState((state) => ({
      ...state,
      items: state.items.map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          isCompleted,
        };
      }),
    }));
  };

  const removeItem = (id: TodoItemId) => {
    setState((state) => ({
      ...state,
      items: state.items.filter((item) => item.id !== id),
    }));
  };

  return {
    items: state.items,
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

const INITIAL_STATE = {
  items: INITIAL_ITEMS,
  nextId: Math.max(...INITIAL_ITEMS.map(({ id }) => id)) + 1,
};
