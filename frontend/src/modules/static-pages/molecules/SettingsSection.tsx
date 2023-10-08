import { type ReactNode } from 'react';
import { type FieldValues } from 'react-hook-form';

import {
  Box,
  Button,
  Flex,
  Heading,
  Paragraph,
  Stack,
} from 'src/shared/design-system';
import { Form, type FormProps } from 'src/shared/forms';

export type SettingsSectionProps<
  TFieldValues extends FieldValues = FieldValues,
> = {
  formProps: Omit<FormProps<TFieldValues>, 'children'>;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

export function SettingsSection<
  TFieldValues extends FieldValues = FieldValues,
>({
  formProps,
  title,
  description,
  children,
}: SettingsSectionProps<TFieldValues>) {
  return (
    <Form {...formProps}>
      <Flex direction={{ base: 'column', md: 'row' }} columnGap="2">
        <Box flex="1">
          <Heading>{title}</Heading>
          {description && <Paragraph>{description}</Paragraph>}
        </Box>
        <Stack flex="2"  bg="white" borderRadius="md" boxShadow="base"  overflow="hidden">
          <Stack p="8">
          {children}
          </Stack>
          <Box textAlign="right" p="2" bg="gray.50" >
            <Button type="submit" bg="green.500" color="white">Save</Button>
          </Box>
        </Stack>
      </Flex>
    </Form>
  );
}
