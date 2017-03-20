import * as types from './ActionTypes';


/**
 * [increment description]
 * @return {[type]} increment
 */
export function increment() {
  return {
    type: types.INCREMENT
  };
}

/**
 * [decrement description]
 * @return {[type]} decrement
 */
export function decrement() {
  return {
    type: types.DECREMENT
  };
}

/**
 * [setColor description]
 * @param {[type]} color [description]
 */
export function setColor(color) {
  return {
    type: types.SET_COLOR,
    color
  };
}

/**
 * [addOffset description]
 * @param {[type]} scrollOffset [description]
 */
export function addOffset(scrollOffset) {
  return {
    type: types.ADD_OFFSET,
    scrollOffset
  };
}

/**
 * [deleteOffset description]
 * @param {[type]} id [description]
 */
export function deleteOffset(id) {
  return {
    type: types.DELETE_OFFSET,
    id
  };
}

export function selectInit(loadData) {
  return {
    type: types.SELECT_INIT,
    loadData
  };
}


export function changeOption(currentSelet, selectIndex, selectValue) {
  return {
    type: types.CHANGE_OPTION,
    currentSelet,
    selectIndex,
    selectValue
  };
}
