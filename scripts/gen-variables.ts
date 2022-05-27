import path from 'path';
import fs from 'fs-extra';

const paletteScssPath = path.resolve(
  __dirname,
  '../node_modules/@douyinfe/semi-theme-default/scss/_palette.scss'
);
const globalScssPath = path.resolve(
  __dirname,
  '../node_modules/@douyinfe/semi-theme-default/scss/global.scss'
);
const outputPath = path.resolve(__dirname, '../src/variables.ts');

const ignorePrefix = ['--semi-shadow', '--semi-border-radius'];

function uniq(data: string[] | null): string[] {
  return [...new Set(data)];
}

function mapToArrayItems(variables: string[]): string {
  return variables.map(v => `  '${v}',`).join('\n');
}

async function extractVariables(filePath): Promise<string[]> {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return uniq(fileContent.match(/^\s+--[^:]*/gm)?.map(v => v.trim())).filter(
    v => !ignorePrefix.some(prefix => v.startsWith(prefix))
  );
}

async function genVariables() {
  const paletteVariables = await extractVariables(paletteScssPath);
  const themeVariables = await extractVariables(globalScssPath);

  const content = `export const palette = [
${mapToArrayItems(paletteVariables)}
] as const;

export type PaletteCssName = typeof palette[number];

export const theme = [
${mapToArrayItems(themeVariables)}
] as const;

export type ThemeCssName = typeof theme[number];
`;

  await fs.outputFile(outputPath, content);
}

genVariables();
