import { InputProps } from '@chakra-ui/react';

import { FormControl, FormErrorMessage, FormLabel, Input } from '../atoms';
import { forwardRef } from '../system';

export type FieldProps = InputProps & {
  id?: string;
  label?: string;
  error?: string;
};

export const Field = forwardRef(function Field(
  { id, label, error, ...props }: FieldProps,
  ref,
) {
  return (
    <FormControl id={id} isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Input ref={ref} {...props} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
});
