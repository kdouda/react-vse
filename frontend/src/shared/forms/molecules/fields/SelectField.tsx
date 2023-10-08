import { Select, type SelectProps } from 'src/shared/design-system';

import { FormField, type FormFieldBaseProps } from '../FormField';

export type SelectFieldProps = FormFieldBaseProps<SelectProps>;

export function SelectField({
  id,
  name,
  label,
  children,
  ...inputProps
}: SelectFieldProps) {
  return (
    <FormField
      id={id}
      name={name}
      label={label}
      isRequired={inputProps.isRequired}
    >
      {({ value, ...field }) => (
        <Select value={value} {...inputProps} {...field}>
            {children}
        </Select>
      )}
    </FormField>
  );
}
