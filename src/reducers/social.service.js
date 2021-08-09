import { ALL_SOCIAL_SERVICE } from '../actions/const';

import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case ALL_SOCIAL_SERVICE:
      return { ...state, ..._.mapKeys(action.payload, '_id') };

    default:
      return state;
  }
};
