export default function (selected, index, option) {

  let defaultIndex = selected;

  let totalIndex = index;
  // console.log('totalIndex', totalIndex);
  if (totalIndex === selected) {
     return ' selected';
   } else {
     return '';
   }
}
