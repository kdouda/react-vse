import { useState } from 'react';

import { useTodoList } from 'src/modules/todo/hooks';
import { AddTodoListItemForm, TodoList } from 'src/modules/todo/organisms';
import { Heading, Stack, Tab, TabList, Tabs } from 'src/shared/design-system';

const STATES = ['all', 'completed', 'not-completed'] as const;

export function Practical02Page() {
  const { items, addItem, setItemIsCompleted, removeItem } = useTodoList();
  const [filter, setFilter] = useState<(typeof STATES)[number]>(STATES[0]);

  return (
    <Stack>
      <Heading>Practical 02</Heading>
      <AddTodoListItemForm addItem={addItem} />
      <Tabs
        index={STATES.indexOf(filter)}
        onChange={(index) => setFilter(STATES[index])}
        variant="soft-rounded"
        colorScheme="blue"
        my="4"
      >
        <TabList>
          <Tab>All</Tab>
          <Tab>Completed</Tab>
          <Tab>Not completed</Tab>
        </TabList>
      </Tabs>
      <TodoList
        items={items.filter((item) => {
          if (filter === 'completed') return item.isCompleted;
          if (filter === 'not-completed') return !item.isCompleted;
          return true;
        })}
        onSetIsCompleted={setItemIsCompleted}
        onRemove={removeItem}
      />
    </Stack>
  );
}
