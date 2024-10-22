import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInput, TextInputProps} from '@components';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          errorMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...textInputProps}
        />
      )}
    />
  );
}
