import React from 'react';
import {Image} from 'react-native';
import {logo} from '../../../assets/logo';

interface Props {
  tailwind: any; // Tailwind style, to keep the native style with style props
  size?: number;
}

export function Logo({tailwind, size = 50}: Props) {
  return (
    <Image
      style={{
        ...tailwind,
        height: size,
        width: size,
      }}
      source={logo}
      resizeMode="contain"
    />
  );
}
