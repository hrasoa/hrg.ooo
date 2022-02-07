import * as React from 'react';
import { AtlasContext } from '@celeste-ui/atlas/context';
import { Checkbox } from '@celeste-ui/atlas/generics/Checkbox';
import { styled } from 'hrg-ooo/stitches.config';

type TProps = {};

const Label = styled('label', {
  '&::before': {
    bottom: 0,
    borderRadius: 'inherit',
    content: '""',
    display: 'block',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    transform: 'scale(1)',
    backgroundColor: 'hsl($accent-h, $accent-s, 70%)',
    opacity: 0,
    transition: 'transform .1s, opacity .1s',
    zIndex: -1,
  },
  alignItems: 'center',
  borderRadius: 'calc($12x - 2px)',
  color: '$accent',
  display: 'flex',
  height: '$control-18x',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  zIndex: 1,
  variants: {
    checked: {
      true: {
        backgroundColor: '$accent',
        color: '$secondary-light',
      },
    },
  },
});

const Root = styled('div', {
  borderColor: '$accent',
  borderRadius: '$12x',
  borderStyle: 'solid',
  borderWidth: '$1x',
  display: 'grid',
  fontSize: '$footnote',
  gridTemplateColumns: 'repeat(3, 1fr)',
  padding: '$2x',
  width: '130px',
});

const Input = styled(Checkbox.Input, {
  [`[data-focus-source="key"] &:focus-within ${Label}::before`]: {
    opacity: 0.5,
    transform: 'scale(1.5, 1.7)',
  },
});

export const ThemeSwitcher: React.FC<TProps> = () => {
  const {
    config: { colorSchemes },
    setColorScheme,
    userPreferences: { colorScheme },
  } = React.useContext(AtlasContext);

  const handleOnClick: React.MouseEventHandler<HTMLInputElement> = e => {
    const { value } = e.currentTarget;
    setColorScheme(value);
  };

  const schemeList = React.useMemo(() => Object.keys(colorSchemes), []);

  return (
    <Root id="theme-switcher" aria-label="Theme switcher">
      {schemeList.map(scheme => (
        <Input
          key={scheme}
          checked={colorScheme === scheme}
          input={{
            id: `color-scheme-${scheme}`,
            name: 'color-scheme',
            onClick: handleOnClick,
            type: 'radio',
            value: scheme,
          }}
          icon={null}
        >
          <Label
            checked={colorScheme === scheme}
            htmlFor={`color-scheme-${scheme}`}
            aria-describedby="theme-switcher"
          >
            {scheme}
          </Label>
        </Input>
      ))}
    </Root>
  );
};
