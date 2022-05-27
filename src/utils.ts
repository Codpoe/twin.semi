export function defaultKeyFormatter(key: string): string {
  return key.startsWith('--') ? key.substring(2) : key;
}

/**
 * Wrap with var()
 */
export function cssVar(variable: `--${string}`, defaultValue?: string) {
  if (defaultValue) {
    return `var(${variable}, ${defaultValue})`;
  }
  return `var(${variable})`;
}

export function cssRgb(value: string, opacityValue?: string) {
  if (opacityValue) {
    return `rgba(${value}, ${opacityValue})`;
  }
  return `rgb(${value})`;
}

export type ColorWithOpacityFn = (params: {
  opacityValue?: string;
  opacityVariable?: `--${string}`;
}) => string;

export function withOpacityValue(variable: `--${string}`): ColorWithOpacityFn {
  return ({ opacityValue, opacityVariable }) => {
    const value = cssVar(variable);

    if (typeof opacityValue !== 'undefined') {
      return cssRgb(value, opacityValue);
    }

    if (opacityVariable) {
      return cssRgb(value, cssVar(opacityVariable, '1'));
    }

    return cssRgb(value);
  };
}
