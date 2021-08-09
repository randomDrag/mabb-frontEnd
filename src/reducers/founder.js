import { ALL_FOUNDER } from '../actions/const';

import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case ALL_FOUNDER:
      return { ...state, ..._.mapKeys(action.payload, '_id') };

    default:
      return state;
  }
};
