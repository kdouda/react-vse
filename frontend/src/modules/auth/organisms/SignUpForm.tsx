import { ReactNode } from 'react';

import { Button, ErrorBanner, Stack } from 'src/shared/design-system';
import { Form, FormField, zod, zodResolver } from 'src/shared/hook-form';

const schema = zod
  .object({
    email: zod.string().email().nonempty(),
    name: zod.string().nonempty({ message: 'Name is required' }),
    password: zod.string().nonempty({ message: 'Password is required' }),
    passwordConfirmation: zod
      .string()
      .nonempty({ message: 'Password confirmation is required' }),
    userName: zod.string().nonempty({ message: 'Username is required' }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords must match',
    path: ['passwordConfirmation'],
  });

type FormValues = zod.infer<typeof schema>;

const initialValues: FormValues = {
  email: '',
  name: '',
  password: '',
  passwordConfirmation: '',
  userName: '',
};

type Props = {
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (data: {
    email: string;
    password: string;
    name: string;
    userName: string;
  }) => void;
  children?: ReactNode;
};

export function SignUpForm({
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
          id="name"
          name="name"
          label="Name"
          type="text"
          isRequired
          autoFocus
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <FormField
          id="userName"
          name="userName"
          label="Username"
          type="text"
          isRequired
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <FormField
          id="email"
          name="email"
          label="Email"
          type="email"
          isRequired
          placeholder="e.g. john@doe.com"
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
        <FormField
          id="passwordConfirmation"
          name="passwordConfirmation"
          label="Password Confirmation"
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
        Sign Up
      </Button>
      {children}
    </Form>
  );
}
