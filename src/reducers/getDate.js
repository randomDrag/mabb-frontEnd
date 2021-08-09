import { DATE } from '../actions/const';

export default (state = {}, action) => {
  switch (action.type) {
    case DATE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
