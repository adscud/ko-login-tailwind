import React, {Dispatch, SetStateAction} from 'react';
import {Alert, Platform, Text, View} from 'react-native';
import {Button, Input, Logo} from '../../core/components';
import {tailwind} from '../../core/config';

interface Props {
  navigate: Dispatch<SetStateAction<string>>;
}

export const LoginPhoneNumber = ({navigate}: Props) => {
  return (
    <View style={tailwind('h-full')}>
      <Logo tailwind={tailwind('self-center')} />
      <Title />
      <Input tailwind={tailwind('mt-8')} keyboardType="number-pad" />
      <Subtitle />
      <Button
        tailwind={Platform.OS === 'ios' && tailwind('mb-4')}
        style={{marginTop: 'auto'}}
        onPress={() => {}}
        text={'Suivant'}
      />
    </View>
  );
};

function Title() {
  return (
    <Text
      style={tailwind(`
            self-center 
            text-center 
            text-3xl 
            font-bold 
            text-primary-800 
            mt-8
    `)}>
      Connectez-vous avec votre numéro de mobile
    </Text>
  );
}

const termStyle = tailwind('text-primary-500 underline');
function Subtitle() {
  return (
    <Text
      style={[
        tailwind(`
          mt-8 
          w-11/12
          self-center
          text-center
          text-base
          font-normal
          text-basic-600
        `),
      ]}>
      En continuant vous acceptez nos&nbsp;
      <Text
        style={termStyle}
        onPress={() => Alert.alert('Conditions générales')}>
        Conditions générales
      </Text>
      &nbsp;et notre&nbsp;
      <Text
        style={termStyle}
        onPress={() => Alert.alert('Politique de conficentialité')}>
        Politique de confidentialité
      </Text>
      .
    </Text>
  );
}
