import { useController } from 'react-hook-form';

import { Field, FieldProps } from 'src/shared/design-system';

export type FormFieldProps = Omit<FieldProps, 'name'> & {
  name: string;
};

export function FormField({ name, ...props }: FormFieldProps) {
  const controller = useController({ name });
  const error = controller?.fieldState?.error?.message;

  return <Field error={error} {...props} {...controller.field} />;
}
