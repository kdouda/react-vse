import { ComponentPropsWithoutRef } from 'react';

import { chakra, ChakraProps } from '../system';

export type TransparentButtonProps = ChakraProps &
  ComponentPropsWithoutRef<'button'>;

export function TransparentButton({ ...rest }: TransparentButtonProps) {
  return (
    <chakra.button
      display="flex"
      alignItems="center"
      color="gray.600"
      fontSize="sm"
      px="3"
      py="1.5"
      _hover={{ color: 'gray.400' }}
      {...rest}
    />
  );
}
