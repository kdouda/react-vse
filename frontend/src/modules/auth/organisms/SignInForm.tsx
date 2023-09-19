import { ReactNode } from 'react';

import { Button, ErrorBanner, Stack } from 'src/shared/design-system';
import { Form, FormField, zod, zodResolver } from 'src/shared/hook-form';

const schema = zod.object({
  email: zod.string().email().nonempty(),
  password: zod.string().nonempty({ message: 'Password is required' }),
});

type FormValues = zod.infer<typeof schema>;

const initialValues: FormValues = {
  email: '',
  password: '',
};

type Props = {
  children?: ReactNode;
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (data: { email: string; password: string }) => void;
};

export function SignInForm({
  isLoading,
  errorMessage,
  onSubmit,
  children,
}: Props) {
  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={initialValues}
      resolver={zodResolver(schema)}
      noValidate
    >
      <Stack spacing="3" py="4">
        {errorMessage && <ErrorBanner title={errorMessage} />}
        <FormField
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="e.g. john@doe.com"
          isRequired
          autoFocus
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <FormField
          id="password"
          name="password"
          label="Password"
          type="password"
          isRequired
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </Stack>
      <Button
        size="lg"
        type="submit"
        isLoading={isLoading}
        colorScheme="green"
        mt="4"
        mb="2"
      >
        Sign In
      </Button>
      {children}
    </Form>
  );
}
