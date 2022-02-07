import { Helmet } from 'react-helmet-async';
import { globalStyles as atlasGlobals } from '@celeste-ui/atlas/stitches.config';
import { AtlasApp } from '@celeste-ui/atlas/App';
import { Page } from '@celeste-ui/atlas/generics/Page';
import { globalStyles, config, styled } from './stitches.config';
import { Txt } from './primitives/Txt';
import { ExternalLink } from './primitives/ExternalLink';
import icons from './icons.json';
import { ThemeSwitcher } from './components/ThemeSwitcher';

type TProps = Partial<React.ComponentProps<typeof AtlasApp>>;

const Container = styled('div', {
  maxWidth: '$app',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '$24x',
  paddingRight: '$24x',
});

const Title = styled('h1', Txt, {
  fontFamily: '$heading',
  fontWeight: '$regular',
  marginTop: '20vh',
});

const SectionTitle = styled('h3', Txt, {
  color: '$text2',
  fontFamily: '$heading',
  fontWeight: '$regular',
  marginTop: '$48x',
});

const Footer = styled(Container, {
  justifyContent: 'flex-end',
  display: 'flex',
  paddingTop: '$24x',
  paddingBottom: '$48x',
});

const App: React.FC<TProps> = ({ userPreferences }) => (
  <>
    {globalStyles()}
    {atlasGlobals()}
    <AtlasApp
      config={{
        colorSchemes: {
          light: {},
          dark: {},
          auto: {},
        },
        media: config.media,
      }}
      icons={icons}
      userPreferences={userPreferences}
    >
      <Helmet>
        <title>Haja</title>
      </Helmet>
      <Page noHeader>
        <main>
          <Container>
            <Title format="h3">Haja Rasoahaingo</Title>
            <Txt>Busy crafting meaningful and accessible interfaces.</Txt>
            <Txt>Playing basketball at my spare time.</Txt>
            <SectionTitle format="h4">Writings</SectionTitle>
            <Txt>Nothing, yet.</Txt>
            <SectionTitle format="h4">Playground</SectionTitle>
            <ExternalLink href="https://celeste-ui.vercel.app/">
              Celeste
            </ExternalLink>
          </Container>
        </main>
        <footer>
          <Footer>
            <ThemeSwitcher />
          </Footer>
        </footer>
      </Page>
    </AtlasApp>
  </>
);

export default App;
