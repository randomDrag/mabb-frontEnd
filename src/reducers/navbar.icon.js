import { NAVBAR_ICON } from '../actions/const';

export default (state = { navIco: 'MabbGroup' }, action) => {
  switch (action.type) {
    case NAVBAR_ICON:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
