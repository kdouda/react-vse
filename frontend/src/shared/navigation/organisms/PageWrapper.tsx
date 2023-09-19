import { ReactNode } from 'react';

import { MainSection } from '../atoms';

import { TopNavigation } from './TopNavigation';

type Props = {
  children: ReactNode;
};

export function PageWrapper({ children }: Props) {
  return (
    <>
      <TopNavigation />
      <MainSection maxW="30rem">{children}</MainSection>
    </>
  );
}
