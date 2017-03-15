import {createStore} from 'redux';
import reducers from './reducers';
import * as actions from './actions';
import $ from 'jquery';
import select from './hbs/select.hbs';
//import testhbs from './hbs/test.hbs';
const store = createStore(reducers);



function makeSelect() {
  $('body').html('').append(select(store.getState().select));
}

const test = {
  id: 1,
  display: true,
  item: [
    {
      option: '옵션1-1',
      value: '0'
    },
    {
      option: '옵션1-2',
      value: '1'
    }
  ]
};
const test2 = {
  id: 2,
  display: true,
  item: [
    {
      option: '옵션2-1',
      value: '0'
    },
    {
      option: '옵션2-2',
      value: '1'
    }
  ]
};

makeSelect();
$('[data-index="select"]').change(function() {

  const thisValue = $(this).val();
  if (thisValue === '0') {
    store.dispatch(actions.changeOption(test));
  }
  if (thisValue === '1') {
    console.log('1');
    store.dispatch(actions.changeOption(test2));
  }
});

$('body').append(testhbs);

store.subscribe(() => {
  makeSelect();
  console.log(store.getState());
});
//
// document.getElementById('increment').addEventListener('click', function () {
//   store.dispatch(actions.increment());
// });
//
// document.getElementById('decrement').addEventListener('click', function () {
//   store.dispatch(actions.decrement());
// });
