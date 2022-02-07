import { styled } from '../stitches.config';

export const Txt = styled('p', {
  marginBottom: 0,
  marginTop: 0,
  variants: {
    format: {
      h1: {
        fontSize: '$h1',
        lineHeight: '$h1',
      },
      h2: {
        fontSize: '$h2',
        lineHeight: '$h2',
      },
      h3: {
        fontSize: '$h3',
        lineHeight: '$h3',
      },
      h4: {
        fontSize: '$h4',
        lineHeight: '$h4',
      },
      body: {
        fontSize: '$body',
        lineHeight: '$body',
      },
    },
    heading: {
      true: {
        fontFamily: '$heading',
      },
    },
  },
  defaultVariants: { format: 'body' },
});
