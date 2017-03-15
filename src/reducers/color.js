import * as types from '../actions/ActionTypes';

const initialState = {
  color: '#000'
};

/**
 * [color description]
 * @param  {[type]} [state=initialState] [description]
 * @param  {[type]} action               [description]
 * @return {[type]}                      [description]
 */
export default function color(state = initialState, action) {
  if (action.type === types.SET_COLOR) {
    return {
      color: action.color
    };
  } else {
    return state;
  }
}
