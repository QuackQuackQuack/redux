import {createStore} from 'redux';
import reducers from './reducers';
import * as actions from './actions';
import $ from 'jquery';
import select from './hbs/select.hbs';
const store = createStore(reducers);


const data = {
  items: [
    {
      name: '옵션1',
      value: 0,
      option: [
        {
          name: '옵션1-1',
          value: 0,
          option: [
            {
              name: '옵션1-1-1',
              value: 0
            },
            {
              name: '옵션1-1-2',
              value: 1
            }
          ]
        },
        {
          name: '옵션1-2',
          value: 1,
          option: [
            {
              name: '옵션1-2-1',
              value: 0
            },
            {
              name: '옵션1-2-2',
              value: 1
            }
          ]
        },
      ]
    },
    {
      name: '옵션2',
      value: 1,
      option: [
        {
          name: '옵션2-1',
          value: 0,
          option: [
            {
              name: '옵션2-1-1',
              value: 0
            },
            {
              name: '옵션2-1-2',
              value: 1
            }
          ]
        },
        {
          name: '옵션2-2',
          value: 1,
          option: [
            {
              name: '옵션2-2-1',
              value: 0
            },
            {
              name: '옵션2-2-2',
              value: 1
            }
          ]
        },
      ]
    }
  ]
}


function init(initData) {
  store.dispatch(actions.selectInit(initData));
}
//
function makeSelect () {
  $('body').html('').append(select(store.getState().select));
}

init(data);
makeSelect();

$(document).on('change', '[data-index="select"]', function() {
  const currentSelet = $(this).attr('data-index-select');
  const selectIndex = $(this)[0].selectedIndex;
  const selectValue = $(this).val();
  store.dispatch(actions.changeOption(currentSelet ,selectIndex, selectValue));
});

store.subscribe(() => {
  makeSelect();
});
