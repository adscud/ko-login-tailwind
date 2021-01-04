import React from 'react';
import {LoginPhoneNumber} from '../components/LoginPhoneNumber';
import {HomeLoggedOut} from '../components/HomeLoggedOut';

export const Router = ({DEFAULT_ROUTE_STATE = 'HomeLoggedOut'}) => {
  const [activeRoute, nextRoute] = React.useState(DEFAULT_ROUTE_STATE);
  switch (activeRoute) {
    case 'LoginPhoneNumber':
      return <LoginPhoneNumber navigate={nextRoute} />;
    case 'HomeLoggedOut':
    default:
      return <HomeLoggedOut navigate={nextRoute} />;
  }
};
