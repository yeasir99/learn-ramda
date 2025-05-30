import { test, expect } from '@playwright/test';
import _ from '../../source/_';
import _curry2 from '../../source/internal/_curry2';

function f(a, b) {
  return [a, b];
}
const curriedF = _curry2(f);

test('_curry2 with both placeholder', () => {
  expect(curriedF(_, _)).toBeInstanceOf(Function);
  expect(typeof curriedF(_, _)).toBe('function');
});

test('_curry2 with single placeholder', () => {
  expect(curriedF(_, 2)).toBeInstanceOf(Function);
  expect(typeof curriedF(1, _)).toBe('function');
});

test('_curry2 Whole test', () => {
  expect(curriedF(_, _)(1, 2)).toEqual([1, 2]);
  expect(curriedF(_, _)(1)(5)).toEqual([1, 5]);
});
