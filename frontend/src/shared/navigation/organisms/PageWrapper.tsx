import { ReactNode } from 'react';

import { type BoxProps } from 'src/shared/design-system';

import { MainSection } from '../atoms';

import { TopNavigation } from './TopNavigation';

type Props = {
  maxW?: BoxProps['maxW'];
  children: ReactNode;
};

export function PageWrapper({ children, maxW, ...props }: Props) {
  return (
    <>
      <TopNavigation />
      <MainSection maxW={maxW} {...props}>
        {children}
      </MainSection>
    </>
  );
}
