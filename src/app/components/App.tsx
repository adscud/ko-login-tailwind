import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {tailwind} from '../../core/config';
import {logo} from '../../../assets/logo';
import {homeLoggedOut} from '../../../assets/png';

const {height: DEVICE_HEIGHT} = Dimensions.get('window');
const THRESHOLD_SCREEN_SIZE = 667;
const STYLE_UPPER_THRESHOLD = tailwind('justify-between');
const STYLE_LOWER_THRESHOLD = {};

export const App = () => {
  return (
    <SafeAreaView style={tailwind('h-full bg-basic-100')}>
      <View
        style={[
          tailwind('h-full p-4 flex flex-col'),
          DEVICE_HEIGHT > THRESHOLD_SCREEN_SIZE
            ? STYLE_UPPER_THRESHOLD
            : STYLE_LOWER_THRESHOLD,
        ]}>
        <Logo />
        <Title />
        <Illustration />
        <Subtitle />
        <Button />
      </View>
    </SafeAreaView>
  );
};

function Logo() {
  return (
    <Image
      style={{
        ...tailwind('self-center'),
        height: 50,
        width: 50,
      }}
      source={logo}
      resizeMode="contain"
    />
  );
}

function Title() {
  return (
    <Text
      style={tailwind(`
            self-center 
            text-center 
            text-3xl 
            font-bold 
            text-primary-500 
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

// Later, we can create `status` props and adapt the tailwind style
function Button() {
  return (
    <TouchableOpacity
      style={tailwind(`
        bg-primary-500 
        h-12 
        rounded-xl
        flex
        items-center
        justify-center
        mt-8
        `)}>
      <Text
        style={tailwind(`
        text-basic-100 
        font-bold
        text-base
      `)}>
        Continuer
      </Text>
    </TouchableOpacity>
  );
}
