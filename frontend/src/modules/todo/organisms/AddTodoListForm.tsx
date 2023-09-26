import { useState } from 'react';

import { Button, Input, Stack } from 'src/shared/design-system';

export type AddTodoListItemFormProps = {
  addItem: (item: { description: string; isCompleted: boolean }) => void;
};

export function AddTodoListItemForm({ addItem }: AddTodoListItemFormProps) {
  const [description, setDescription] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        addItem({ description, isCompleted: false });
        setDescription('');
      }}
    >
      <Stack direction="row">
        <Input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="What needs to be done?"
        />
        <Button type="submit">Add</Button>
      </Stack>
    </form>
  );
}
