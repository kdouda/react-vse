import { ReactNode } from 'react';

import { Heading, Paragraph } from 'src/shared/design-system';

import { MainSection } from '../atoms';
import { TopNavigation } from '../organisms';

type Props = {
  title: string;
  children?: ReactNode;
};

export function PlaceholderTemplate({ title, children }: Props) {
  return (
    <>
      <TopNavigation />
      <MainSection maxW="30rem">
        <Heading>{title}</Heading>

        {typeof children === 'undefined' ? (
          <Paragraph>This page is empty for now...</Paragraph>
        ) : (
          children
        )}
      </MainSection>
    </>
  );
}
