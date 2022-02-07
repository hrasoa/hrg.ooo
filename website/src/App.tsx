import { Helmet } from 'react-helmet-async';
import { globalStyles as atlasGlobals } from '@celeste-ui/atlas/stitches.config';
import { AtlasApp } from '@celeste-ui/atlas/App';
import { Page } from '@celeste-ui/atlas/generics/Page';
import { Icon } from '@celeste-ui/atlas/primitives/Icon';
import { globalStyles, config, styled } from './stitches.config';
import { Txt } from './primitives/Txt';
import { ExternalLink } from './primitives/ExternalLink';
import icons from './icons.json';
import { ThemeSwitcher } from './components/ThemeSwitcher';

type TProps = Partial<React.ComponentProps<typeof AtlasApp>>;

const Box = styled('div');

const Container = styled('div', {
  maxWidth: '$app',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '$24x',
  paddingRight: '$24x',
});

const Intro = styled('div', {
  marginTop: '$6x',
});

const Title = styled('h1', Txt, {
  fontFamily: '$heading',
  fontWeight: '$regular',
  marginTop: '$96x',
  '@tablet': {
    marginTop: '20vh',
  },
});

const SectionTitle = styled('h2', Txt, {
  color: '$text2',
  fontFamily: '$heading',
  fontWeight: '$regular',
  marginTop: '$48x',
});

const Footer = styled(Container, {
  justifyContent: 'flex-end',
  display: 'flex',
  paddingTop: '$48x',
  paddingBottom: '$48x',
});

const GlassLink = styled(ExternalLink, {
  marginTop: '$12x',
  paddingTop: '$12x',
  paddingBottom: '$12x',
  position: 'relative',
  '&::before': {
    backgroundColor: '$glass1',
    borderColor: '$border1',
    borderWidth: '$1x',
    borderStyle: 'solid',
    bottom: 0,
    borderRadius: '$8x',
    content: '""',
    left: '-$12x',
    position: 'absolute',
    right: '-$12x',
    transition: 'background-color .1s',
    top: 0,
  },
  '&:hover::before': {
    backgroundColor: '$glass1Hover',
  },
  '@tablet': {
    '&::before': {
      left: '-$24x',
      right: '-$24x',
    },
  },
});

const ExternalIndicator = styled(Icon, {
  verticalAlign: 'middle',
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
            <Intro>
              <Txt>Busy crafting meaningful and accessible interfaces.</Txt>
              <Txt>
                Playing basketball at my spare time (M.J. is the g.o.a.t, change
                my mind).
              </Txt>
            </Intro>
            <SectionTitle format="h4">Writings</SectionTitle>
            <Txt css={{ marginTop: '$6x' }}>Nothing, yet.</Txt>
            <SectionTitle format="h4">Playground</SectionTitle>
            <GlassLink href="https://celeste-ui.vercel.app/">
              <Txt css={{ textDecoration: 'underline' }}>
                Celeste <ExternalIndicator icon="lucide:arrow-up-right" />
              </Txt>
              <Txt>
                An unstyled and accessible component library built with&nbsp;
                <i>react</i> and&nbsp;
                <i>stitches</i>.
              </Txt>
            </GlassLink>
            <SectionTitle format="h4">Get in touch</SectionTitle>
            <Box css={{ marginTop: '$6x' }}>
              <ExternalLink
                target={undefined}
                href="mailto:haja.rasoah@gmail.com"
                css={{ textDecoration: 'underline' }}
              >
                haja.rasoah@gmail.com
              </ExternalLink>
              <ExternalLink
                href="https://twitter.com/hjrshng"
                indicator
                css={{ textDecoration: 'underline' }}
              >
                Twitter
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/in/haja-rasoahaingo-83879642/"
                indicator
                css={{ textDecoration: 'underline' }}
              >
                LinkedIn
              </ExternalLink>
            </Box>
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
