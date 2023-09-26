import { Box, Stack } from 'src/shared/design-system';

import { TodoListItem, type TodoListItemProps } from '../molecules';
import { type TodoItem } from '../types';

export type TodoListProps = {
  items: Array<TodoItem>;
  onSetIsCompleted: TodoListItemProps['onSetIsCompleted'];
  onRemove: TodoListItemProps['onRemove'];
};

export function TodoList({ items, onSetIsCompleted, onRemove }: TodoListProps) {
  return (
    <Stack
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      overflow="hidden"
      spacing="0"
    >
      {items.length === 0 && (
        <Box p="4" textAlign="center" bg="gray.50">
          No items
        </Box>
      )}
      {items.map((item) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          isCompleted={item.isCompleted}
          onSetIsCompleted={onSetIsCompleted}
          onRemove={onRemove}
        >
          {item.description}
        </TodoListItem>
      ))}
    </Stack>
  );
}
