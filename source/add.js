import _curry2 from './internal/_curry2.js';

const add = _curry2(function add(a, b) {
  return Number(a) + Number(b);
});

export default add;
