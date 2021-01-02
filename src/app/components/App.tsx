import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {tailwind} from '../../core/config';

export const App = () => {
  return (
    <SafeAreaView style={tailwind('h-full bg-basic-100')}>
      <View style={tailwind('h-full p-4')}>
        <Text style={tailwind('w-full')}>Hello, I'm build with Tailwind</Text>
      </View>
    </SafeAreaView>
  );
};
