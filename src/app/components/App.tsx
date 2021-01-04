import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import {tailwind} from '../../core/config';
import {Router} from '../router';

export const App = () => {
  return (
    <SafeAreaView style={tailwind('h-full bg-basic-100')}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={tailwind('h-full p-4')}>
        <Router />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
