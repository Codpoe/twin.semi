import { expect, test } from 'vitest';
import { palette, theme } from 'twin.semi/variables';

test('palette', () => {
  expect(palette).toMatchSnapshot();
});

test('theme', () => {
  expect(theme).toMatchSnapshot();
});
