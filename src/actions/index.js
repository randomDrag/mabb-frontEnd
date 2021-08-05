import { NAVBAR_ICON } from './const';

export const navIcon = (data) => {
  return {
    type: NAVBAR_ICON,
    payload: data,
  };
};
