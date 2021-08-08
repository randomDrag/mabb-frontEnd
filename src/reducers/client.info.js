import { ALL_CLIENT_FETCH } from '../actions/const';

import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case ALL_CLIENT_FETCH:
      return { ...state, ..._.mapKeys(action.payload, '_id') };

    default:
      return state;
  }
};
