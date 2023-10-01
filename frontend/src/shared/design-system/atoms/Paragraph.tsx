import { ReactNode } from 'react';

import { chakra, ChakraProps } from '../system';

export type ParagraphProps = ChakraProps & {
  children: ReactNode;
};

export function Paragraph(props: ParagraphProps) {
  return <chakra.p mb="3" {...props} />;
}
