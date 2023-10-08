import { Textarea, type TextareaProps } from 'src/shared/design-system';

import { FormField, type FormFieldBaseProps } from '../FormField';

export type TextareaFieldProps = FormFieldBaseProps<TextareaProps>;

export function TextareaField({
  id,
  name,
  label,
  ...inputProps
}: TextareaFieldProps) {
  return (
    <FormField
      id={id}
      name={name}
      label={label}
      isRequired={inputProps.isRequired}
    >
      {(field) => <Textarea {...inputProps} {...field} />}
    </FormField>
  );
}
