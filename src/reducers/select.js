import * as types from '../actions/ActionTypes';

const initialState = {
  selectBox:[
    {
      selectId: 0,
      selectedIndex: '',
      name: '선택',
      display: true,
      items: []
    },
    {
      selectId: 1,
      selectedIndex: '',
      name: '선택',
      display: false,
      items: []
    },
    {
      selectId: 2,
      selectedIndex: '',
      name: '선택',
      display: false,
      items: []
    }
  ]
};


export default function selct(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case types.SELECT_INIT:
      const itemLength = action.loadData.items.length;
      let initData;

      for (var i = 0; i < itemLength; ++i) {
        newState.selectBox[0].items.push(action.loadData.items[i]);
      }
      return newState;

    case types.CHANGE_OPTION:

      /**
       * newState new state
       * cuurentSelet current selected select
       * selectboxLength selectBox Length
       */
      const selectboxLength = state.selectBox.length;
      const currentSelet = parseInt(action.currentSelet);
      const nextSelet = (currentSelet < selectboxLength) ? currentSelet + 1 : currentSelet;
      const currentSeletValue = parseInt(action.selectValue) || 0;
      const currentSselectIndex = parseInt(action.selectIndex) - 1;
      const optionLength = newState.selectBox[0].items.length;

      /**
       * 셀렉트 박스선택 표시
       */
      for(var i = nextSelet; i < selectboxLength; ++i) {
        newState.selectBox[i].selectedIndex = ''
      }
      newState.selectBox[currentSelet].selectedIndex = currentSselectIndex;

      if (nextSelet < selectboxLength) {

        /**
         * 순차적으로 셀렉트 박스 나열
         */
        const currentLength = newState.selectBox[currentSelet].items[0].option.length;
        newState.selectBox[nextSelet].display = true;

        /**
         * 순차적으로 데이터 입력
         */

        if(newState.selectBox[nextSelet].items.length != 0) {
          newState.selectBox[nextSelet].items = [];
        }
        for (var i = 0; i < currentLength; ++i) {
          newState.selectBox[nextSelet].items.push(newState.selectBox[currentSelet].items[currentSeletValue].option[i]);
        };
      }
      return newState;

    default: return state;
  }

}
