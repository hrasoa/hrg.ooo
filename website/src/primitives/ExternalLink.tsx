import * as React from 'react';
import { Icon } from '@celeste-ui/atlas/primitives/Icon';
import { styled } from 'hrg-ooo/stitches.config';

type TProps = React.ComponentProps<typeof Anchor>;

const Anchor = styled('a', {
  color: '$text1',
  textDecoration: 'underline',
});

const Indicator = styled(Icon, {
  verticalAlign: 'middle',
});

export const ExternalLink: React.FC<TProps> = ({ children, ...props }) => (
  <Anchor target="_blank" {...props}>
    {children}
    <Indicator icon="lucide:arrow-up-right" />
  </Anchor>
);
