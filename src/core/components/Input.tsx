import React from 'react';
import {KeyboardTypeOptions, TextInput} from 'react-native';
import {tailwind as tw} from '../config';

interface Props {
  tailwind: any; // Tailwind style, to keep the native style with style props
  keyboardType?: KeyboardTypeOptions;
}

export function Input({tailwind, keyboardType = 'default'}: Props) {
  const [focused, setFocused] = React.useState<boolean>(false);

  const _handleFocus = React.useCallback(() => {
    setFocused(true);
  }, []);

  const _handleBur = React.useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <TextInput
      style={{
        ...tw(`
           h-12 
           px-4
           rounded-xl
           border
           ${focused ? 'border-primary-500' : 'border-basic-400'}
        `),
        ...tailwind,
      }}
      onFocus={_handleFocus}
      onBlur={_handleBur}
      keyboardType={keyboardType}
      returnKeyType={'done'}
    />
  );
}
