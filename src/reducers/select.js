import * as types from '../actions/ActionTypes';

const initialState = {
  items:[
    {
      id: 0,
      display: true,
      item: [
        {
          option: '선택'
        },
        {
          option: '옵션1',
          value: '0'
        },
        {
          option: '옵션2',
          value: '1'
        }
      ]
    },
  ],
};


export default function selct(state = initialState, action) {
  if (action.type === types.CHANGE_OPTION) {
    const temp = Object.assign({}, state);
    temp.items.push(action.data);
    console.log(temp);
    return temp;
  } else {
    return state;
  }
}
