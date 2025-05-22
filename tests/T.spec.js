import { test, expect } from '@playwright/test';

import T from '../source/T';

test('T', function () {
  expect(T()).toBe(true);
  expect(T(false)).toBe(true);
  expect(T(10)).toBe(true);
});
