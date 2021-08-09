import { combineReducers } from 'redux';

import navbarIcon from './navbar.icon';
import clientData from './client.info';
import teamInfo from './team.info';
import socialClientInfo from './social.client.info';
import socialService from './social.service';
import getdate from './getDate';
import founder from './founder';
export default combineReducers({
  navbarIcon,
  clientData,
  teamInfo,
  socialClient: socialClientInfo,
  socialService,
  getdate,
  founder,
});
