import * as React from 'react';
import { styled } from 'hrg-ooo/stitches.config';
import { Icon } from '@celeste-ui/atlas/primitives/Icon';

type TProps = React.ComponentProps<typeof Anchor> & { indicator?: boolean };

const Anchor = styled('a', {
  color: '$text1',
  display: 'block',
  textDecoration: 'none',
});

const Indicator = styled(Icon, {
  verticalAlign: 'middle',
});

export const ExternalLink: React.FC<TProps> = ({
  children,
  indicator,
  ...props
}) => (
  <Anchor target="_blank" rel="noopener" {...props}>
    {children}
    {indicator && <Indicator icon="lucide:arrow-up-right" />}
  </Anchor>
);
