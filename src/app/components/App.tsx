import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {tailwind} from '../../core/config';

export const App = () => {
  return (
    <SafeAreaView style={tailwind('bg-primary-100 h-full')}>
      <Text>Hello, I'm build with Tailwind</Text>
    </SafeAreaView>
  );
};
