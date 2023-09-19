import { ReactNode } from 'react';

import { Box, BoxProps, Center } from 'src/shared/design-system';

type Props = BoxProps & {
  children: ReactNode;
};

export function MainSection({ children, ...restProps }: Props) {
  return (
    <Center p="4" borderTop="1px" borderColor="blackAlpha.200">
      <Box as="section" minW="30rem" {...restProps}>
        {children}
      </Box>
    </Center>
  );
}
