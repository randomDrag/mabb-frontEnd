import { combineReducers } from 'redux';

import navbarIcon from './navbar.icon';
import clientData from './client.info';
import teamInfo from './team.info';
import socialClientInfo from './social.client.info';

export default combineReducers({
  navbarIcon,
  clientData,
  teamInfo,
  socialClient: socialClientInfo,
});
