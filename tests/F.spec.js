import { test, expect } from '@playwright/test';
import F from '../source/F';

test('F', function () {
  expect(F()).toBe(false);
  expect(F(true)).toBe(false);
  expect(F(10)).toBe(false);
});
