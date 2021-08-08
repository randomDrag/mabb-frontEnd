import { api } from '../api';
import {
  ALL_CLIENT_FETCH,
  ALL_SOCIAL_CLIENT,
  ALL_TEAM_FETCH,
  NAVBAR_ICON,
} from './const';

export const navIcon = (data) => {
  return {
    type: NAVBAR_ICON,
    payload: data,
  };
};

export const fetchAllClient = () => {
  return async (dispatch) => {
    const response = await api.get('/mabbgroup/clientInfo');

    dispatch({
      type: ALL_CLIENT_FETCH,
      payload: response.data,
    });
  };
};

export const fetchAllTeam = () => {
  return async (dispatch) => {
    const response = await api.get('/mabbgroup/Team');

    dispatch({
      type: ALL_TEAM_FETCH,
      payload: response.data,
    });
  };
};

export const fetchAllSocialClient = () => {
  return async (dispatch) => {
    const response = await api.get('/social/clientInfo');

    dispatch({
      type: ALL_SOCIAL_CLIENT,
      payload: response.data,
    });
  };
};
