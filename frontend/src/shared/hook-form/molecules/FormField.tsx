import { useController } from 'react-hook-form';

import { Field, FieldProps } from 'src/shared/design-system';

type Props = Omit<FieldProps, 'name'> & {
  name: string;
};

export function FormField({ name, ...props }: Props) {
  const controller = useController({ name });
  const error = controller?.fieldState?.error?.message;

  return <Field error={error} {...props} {...controller.field} />;
}
