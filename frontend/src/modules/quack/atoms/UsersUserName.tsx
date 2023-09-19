import { chakra, ChakraProps } from 'src/shared/design-system';

type Props = ChakraProps & {
  userName: string;
};

export function UsersUserName({ userName, ...restProps }: Props) {
  return (
    <chakra.span color="gray.500" fontSize="sm" {...restProps}>
      @{userName}
    </chakra.span>
  );
}
