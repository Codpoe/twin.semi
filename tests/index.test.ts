import { expect, test } from 'vitest';
import { twinSemiPreset } from 'twin.semi';

test('preset', () => {
  expect(twinSemiPreset()).toMatchObject({
    theme: {
      extend: {
        colors: {},
      },
    },
  });

  expect(twinSemiPreset()).toMatchSnapshot();

  expect(
    twinSemiPreset({
      keyFormatter: key => (key.startsWith('--semi-') ? key.substring(7) : key),
    })
  ).toMatchSnapshot();
});
