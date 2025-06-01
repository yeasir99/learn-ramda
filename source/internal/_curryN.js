import _arity from './_arity.js';
import _isPlaceholder from './_isPlaceholder.js';

export default function _curryN(length, received, fn) {
  return function () {
    let combined = [];
    let argsIdx = 0;
    let left = length;
    let combinedIdx = 0;
    let hasPlaceholder = false;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      let result;
      if (
        (combinedIdx < received.length &&
          !_isPlaceholder(received[combinedIdx])) ||
        argsIdx >= arguments.length
      ) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      } else {
        hasPlaceholder = true;
      }
      combinedIdx += 1;
    }

    return !hasPlaceholder && left <= 0
      ? fn.apply(this, combined)
      : _arity(Math.max(0, left), _curryN(length, combined, fn));
  };
}
