import * as React from 'react';
import { AtlasContext } from '@celeste-ui/atlas/context';
import { Checkbox } from '@celeste-ui/atlas/generics/Checkbox';
import { styled } from 'hrg-ooo/stitches.config';

type TProps = {};

const Label = styled('label', {
  alignItems: 'center',
  borderRadius: 'calc($12x - 2px)',
  color: '$accent',
  display: 'flex',
  height: '$control-18x',
  justifyContent: 'center',
  width: '100%',
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
    <Root>
      {schemeList.map(scheme => (
        <Checkbox.Input
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
          >
            {scheme}
          </Label>
        </Checkbox.Input>
      ))}
    </Root>
  );
};
