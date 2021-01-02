import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {tailwind} from '../../core/config';

export const App = () => {
  return (
    <SafeAreaView style={tailwind('h-full bg-blue-200')}>
      <Text>Hello, I'm build with Tailwind</Text>
    </SafeAreaView>
  );
};
