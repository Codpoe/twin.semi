import { expect, test } from 'vitest';
import { cssVar, cssRgb, withOpacityValue } from 'twin.semi/utils';

test('cssVar', () => {
  expect(cssVar('--semi-color-primary')).toBe('var(--semi-color-primary)');
  expect(cssVar('--semi-color-primary', '#666')).toBe(
    'var(--semi-color-primary, #666)'
  );
});

test('cssRgb', () => {
  expect(cssRgb('77, 88, 99')).toBe('rgb(77, 88, 99)');
  expect(cssRgb('77, 88, 99', '0.1')).toBe('rgba(77, 88, 99, 0.1)');
});

test('withOpacityValue', () => {
  const fn = withOpacityValue('--semi-red-5');

  expect(fn({})).toBe('rgb(var(--semi-red-5))');

  expect(fn({ opacityVariable: '--tw-text-opacity' })).toBe(
    'rgba(var(--semi-red-5), var(--tw-text-opacity, 1))'
  );

  expect(
    fn({ opacityValue: '0.1', opacityVariable: '--tw-text-opacity' })
  ).toBe('rgba(var(--semi-red-5), 0.1)');
});
