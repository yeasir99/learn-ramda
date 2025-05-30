import add from './source/add.js';
import _ from './source/_.js';
import _curry3 from './source/internal/_curry3.js';
const { log } = console;

const countTriple = _curry3(function countTriple(a, b, c) {
  return add(c, add(a, b));
});

log(countTriple(_)(6)(7, 10));
log(add(_)(6)(7));
