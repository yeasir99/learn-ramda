import _isPlaceholder from './_isPlaceholder.js';

export default function _curry1(fn) {
  console.log(arguments);
  return function f1(a) {
    console.log(arguments);
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return f1.apply(this, arguments);
    }
  };
}
