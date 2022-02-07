import { createStitches } from '@stitches/react';

export const {
  config,
  css,
  createTheme,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  prefix: 'app',
  theme: {
    borderWidths: {
      '1x': '1px',
    },
    colors: {
      'accent-h': '0',
      'accent-s': '100%',
      'accent-l': '45%',
      //
      'brand-h': '154',
      'brand-s': '88%',
      'brand-l': '67%',
      'brand-h-dark': '65',
      'brand-s-dark': '30%',
      'brand-l-dark': '7%',
      //
      'secondary-h': '47',
      'secondary-s': '100%',
      'secondary-l': '94%',
      'secondary-h-dark': '93',
      'secondary-s-dark': '56%',
      'secondary-l-dark': '24%',
      // Light
      'brand-light': 'hsl($brand-h, $brand-s, $brand-l)',
      'secondary-light': 'hsl($secondary-h, $secondary-s, $secondary-l)',
      'text1-light': 'hsl($brand-h, $brand-s, 10%)',
      'text2-light': 'hsl($brand-h, 30%, 30%)',
      // Dark
      'secondary-dark': 'hsl($brand-h-dark, $brand-s-dark, $brand-l-dark)',
      'brand-dark':
        'hsl($secondary-h-dark, $secondary-s-dark, $secondary-l-dark)',
      'text1-dark': 'hsl($brand-h-dark, 15%, 85%)',
      'text2-dark': 'hsl($brand-h-dark, 5%, 75%)',
      // Assign
      accent: 'hsl($accent-h, $accent-s, $accent-l)',
      brand: '$brand-light',
      secondary: '$secondary-light',
      text1: '$text1-light',
      text2: '$text2-light',
    },
    fonts: {
      body: "'Merriweather', serif",
      heading: "'Vollkorn', serif",
    },
    fontSizes: {
      largeTitle: '3em',
      h1: '2.5em',
      h2: '2em',
      h3: '1.75em',
      h4: '1.2em',
      body: '14px',
      callout: '12px',
      footnote: '10px',
      caption: '10px',
    },
    fontWeights: {
      regular: 300,
    },
    lineHeights: {
      largeTitle: 'calc(1ex / 0.42)',
      h1: 'calc(1ex / 0.42)',
      h2: 'calc(1ex / 0.42)',
      h3: 'calc(1ex / 0.38)',
      h4: 'calc(1ex / 0.37)',
      body: 'calc(1ex / 0.32)',
      callout: 'calc(1ex / 0.32)',
      footnote: 'calc(1ex / 0.32)',
      caption: 'calc(1ex / 0.32)',
    },
    radii: {
      '2x': '2px',
      '4x': '4px',
      '6x': '6px',
      '8x': '8px',
      '10x': '10px',
      '12x': '12px',
      round: '50%',
    },
    sizes: {
      '1x': '1px',
      'control-18x': '18px',
      'control-20x': '20px',
      'control-26x': '26px',
      'control-32x': '32px',
      'control-38x': '38px',
      'control-44x': '44px',
      'icon-10x': '10px',
      'icon-16x': '16px',
      'icon-24x': '24px',
      app: '640px',
    },
    space: {
      '1x': '1px',
      '2x': '2px',
      '6x': '6px',
      '12x': '12px',
      '24x': '24px',
      '48x': '48px',
      '96x': '96px',
      '192x': '192px',
    },
  },
});

export const globalStyles = globalCss({
  html: {
    color: '$text1',
    background: 'linear-gradient(180deg, $brand 13.54%, $secondary 100%);',
    fontFamily: '$body',
    fontSize: '$body',
    lineHeight: '$body',
  },
  ':root[data-color-scheme="dark"]': {
    $colors$brand: '$colors$brand-dark',
    $colors$secondary: '$colors$secondary-dark',
    $colors$text1: '$colors$text1-dark',
    $colors$text2: '$colors$text2-dark',
  },
  '@media (prefers-color-scheme: dark)': {
    ':root[data-color-scheme="auto"]': {
      $colors$brand: '$colors$brand-dark',
      $colors$secondary: '$colors$secondary-dark',
      $colors$text1: '$colors$text1-dark',
      $colors$text2: '$colors$text2-dark',
    },
  },
});
