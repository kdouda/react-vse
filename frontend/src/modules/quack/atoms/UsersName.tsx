import { chakra, ChakraProps } from 'src/shared/design-system';

type Props = ChakraProps & {
  name: string;
};

export function UsersName({ name, ...restProps }: Props) {
  return (
    <chakra.span color="blackAlpha.800" fontWeight="bold" {...restProps}>
      {name}
    </chakra.span>
  );
}
