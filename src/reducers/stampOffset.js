import * as types from '../actions/ActionTypes';

const initialState = {
  id: 0,
  offset: 0
};

let nextTodoId = 0;

/**
 * [stampOffset description]
 * @param {[type]} [state=initialState] [description]
 * @param {[type]} action               [description]
 */
export default function stampOffset(state = initialState, action) {
  switch (action.type) {
    case types.ADD_OFFSET:
      return [
        {
          id: nextTodoId++,
          offset: action.scrollOffset
        },
        ...state
      ];
    case types.DELETE_OFFSET:
      return state.filter(scrollOffset =>
          scrollOffset.id !== action.id
      );
    default: return state;
  }
}
