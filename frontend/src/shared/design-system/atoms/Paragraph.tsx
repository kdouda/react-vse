import { ReactNode } from 'react';

import { chakra, ChakraProps } from '../system';

type Props = ChakraProps & {
  children: ReactNode;
};

export function Paragraph(props: Props) {
  return <chakra.p mb="3" {...props} />;
}
