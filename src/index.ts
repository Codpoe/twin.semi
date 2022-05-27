import { palette, theme } from './variables.js';
import {
  ColorWithOpacityFn,
  cssVar,
  defaultKeyFormatter,
  withOpacityValue,
} from './utils.js';

export interface TwinSemiPresetOptions {
  keyFormatter?: (key: string) => string;
}

export function twinSemiPreset({
  keyFormatter = defaultKeyFormatter,
}: TwinSemiPresetOptions = {}) {
  const paletteColors = palette.reduce<Record<string, ColorWithOpacityFn>>(
    (colors, variable) => {
      colors[keyFormatter(variable)] = withOpacityValue(variable);
      return colors;
    },
    {}
  );

  const themeColors = theme.reduce<Record<string, string>>(
    (colors, variable) => {
      colors[keyFormatter(variable)] = cssVar(variable);
      return colors;
    },
    {}
  );

  return {
    theme: {
      extend: {
        colors: {
          ...paletteColors,
          ...themeColors,
        },
      },
    },
  };
}
