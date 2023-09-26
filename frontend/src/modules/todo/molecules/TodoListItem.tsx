import { type ReactNode } from 'react';

import {
  Checkbox,
  DeleteIcon,
  IconButton,
  Spacer,
  Stack,
} from 'src/shared/design-system';

import { TodoItemId } from '../types';

export type TodoListItemProps = {
  id: TodoItemId;
  isCompleted: boolean;
  children: ReactNode;
  onSetIsCompleted: (id: TodoItemId, isCompleted: boolean) => void;
  onRemove: (id: TodoItemId) => void;
};

export function TodoListItem({
  id,
  isCompleted,
  children,
  onSetIsCompleted,
  onRemove,
}: TodoListItemProps) {
  return (
    <Stack
      direction="row"
      role="group"
      p="2"
      spacing="1"
      textDecoration={isCompleted ? 'line-through' : 'none'}
      color={isCompleted ? 'gray.500' : 'black'}
      _hover={{ bg: 'gray.100' }}
    >
      <Checkbox
        isChecked={isCompleted}
        onChange={(event) => onSetIsCompleted(id, event.target.checked)}
      >
        {children}
      </Checkbox>
      <Spacer />
      <IconButton
        icon={<DeleteIcon />}
        colorScheme="red"
        size="sm"
        visibility="hidden"
        aria-label="Remove item"
        _groupHover={{ visibility: 'visible' }}
        onClick={() => onRemove(id)}
      />
    </Stack>
  );
}
