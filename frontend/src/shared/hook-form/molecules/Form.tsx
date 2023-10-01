import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form';

export type FormProps<TFieldValues extends FieldValues = FieldValues> =
  UseFormProps<TFieldValues> & {
    children: ReactNode;
    onSubmit: SubmitHandler<TFieldValues>;
    noValidate?: boolean;
  };

export function Form<TFieldValues extends FieldValues = FieldValues>({
  children,
  onSubmit,
  noValidate = false,
  ...rest
}: FormProps<TFieldValues>) {
  const methods = useForm<TFieldValues>(rest);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate={noValidate}>
        {children}
      </form>
    </FormProvider>
  );
}
