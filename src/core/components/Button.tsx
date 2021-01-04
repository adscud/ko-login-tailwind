import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {tailwind as tw} from '../config';
import React from 'react';
import {styleByStatus} from './Button.style';

interface Props {
  style?: ViewStyle | ViewStyle[];
  tailwind?: any; // Tailwind style, to keep the native style with style props
  onPress: () => void;
  text: string;
  status?: 'primary'; // Later, add 'basic', 'success', 'error'...
}

export function Button({
  style = {},
  tailwind,
  onPress,
  text,
  status = 'primary',
}: Props) {
  return (
    <TouchableOpacity
      style={[
        tw(`
          ${styleByStatus[status].button} 
          h-12 
          rounded-xl
          flex
          items-center
          justify-center
          mt-8
        `),
        style,
        tailwind,
      ]}
      onPress={onPress}>
      <Text
        style={tw(`
        ${styleByStatus[status].text}  
        font-bold
        text-base
      `)}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
