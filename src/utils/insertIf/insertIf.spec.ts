import { arrayInsertIf, objectInsertIf } from './';
import { expect, test } from 'vitest';

test('arrayInsertIf: returns empty array if condition is false', () => {
  expect(arrayInsertIf(false, [1, 2, 3])).toEqual([]);
});

test('arrayInsertIf: returns array if condition is true', () => {
  expect(arrayInsertIf(true, [1, 2, 3])).toEqual([1, 2, 3]);
});

test('objectInsertIf: returns null if condition is false', () => {
  expect(objectInsertIf(false, { a: 0, b: 1 })).toEqual(null);
});

test('objectInsertIf: returns object if condition is true', () => {
  expect(objectInsertIf(true, { a: 0, b: 1 })).toEqual({ a: 0, b: 1 });
});
