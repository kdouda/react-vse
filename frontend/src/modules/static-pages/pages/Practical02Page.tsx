import { useTodoList } from 'src/modules/todo/hooks';
import { Box, Button, Heading, Input } from 'src/shared/design-system';

export function Practical02Page() {
  const { items } = useTodoList();

  return (
    <Box>
      <Heading>Practical 02</Heading>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Input type="text" placeholder="What shell to be done?" />
        <Button type="submit">Add</Button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" /> {item.description}
            </label>
          </li>
        ))}
      </ul>
    </Box>
  );
}
