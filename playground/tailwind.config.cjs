const { twinSemiPreset } = require('../dist');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [twinSemiPreset()],
};
