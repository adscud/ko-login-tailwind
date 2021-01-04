import {tailwind} from '../../core/config';
import {Dimensions, Image, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {homeLoggedOut} from '../../../assets/png';
import {Button, Logo} from '../../core/components';

const {height: DEVICE_HEIGHT} = Dimensions.get('window');
const THRESHOLD_SCREEN_SIZE = 667;
const STYLE_UPPER_THRESHOLD = tailwind('justify-between');
const STYLE_LOWER_THRESHOLD = {};

interface Props {
  navigate: Dispatch<SetStateAction<string>>;
}

export const HomeLoggedOut = ({navigate}: Props) => {
  return (
    <View
      style={[
        tailwind('h-full'),
        DEVICE_HEIGHT > THRESHOLD_SCREEN_SIZE
          ? STYLE_UPPER_THRESHOLD
          : STYLE_LOWER_THRESHOLD,
      ]}>
      <Logo tailwind={tailwind('self-center')} />
      <Title />
      <Illustration />
      <Subtitle />
      <Button text={'Continuer'} onPress={() => navigate('LoginPhoneNumber')} />
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
      Ko, votre nouveau réseau social vidéo !
    </Text>
  );
}

function Illustration() {
  return (
    <Image
      style={{
        ...tailwind('self-center mt-8'),
        height: 250,
        width: 250,
      }}
      source={homeLoggedOut}
      resizeMode="contain"
    />
  );
}

function Subtitle() {
  return (
    <Text
      style={tailwind(`
            w-11/12
            text-center
            text-base
            font-normal
            text-basic-600
            mt-8
    `)}>
      Simple et gratuit, avec des centaines de fonctionnalités à venir.{'\n'}
      Bienvenue sur Ko !
    </Text>
  );
}
