import { RadioGroup, type RadioGroupProps, Stack } from 'src/shared/design-system';

import { FormField, type FormFieldBaseProps } from '../FormField';

export type RadioGroupFieldProps = FormFieldBaseProps<RadioGroupProps>;

export function RadioGroupField({
  id,
  name,
  label,
  children,
  ...inputProps
}: RadioGroupFieldProps) {
  return (
    <FormField
      id={id}
      name={name}
      label={label}
      isRequired={inputProps.isRequired}
    >
      {({ value, ...field }) => (
        <RadioGroup value={value} {...inputProps} {...field}>
          <Stack>
            {children}
          </Stack>
        </RadioGroup>
      )}
    </FormField>
  );
}