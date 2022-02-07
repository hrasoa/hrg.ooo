import { IncomingMessage, ServerResponse } from 'http';
import { StaticRouter } from 'react-router-dom/server';
import * as Helmet from 'react-helmet-async';
// eslint-disable-next-line import/no-named-as-default
import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import cookie from 'fastify-cookie';
import { renderToString } from 'react-dom/server';
import { getCssText as atlasGetCssText } from '@celeste-ui/atlas/stitches.config';
import App from './App';
import { getCssText } from './stitches.config';

const isProd = process.env.NODE_ENV === 'production';

const helmetContext: { helmet?: Helmet.HelmetProps } = {};

const assetsImport: Record<string, any> = require(process.env
  .APP_ASSETS_MANIFEST!);

const jsScriptTagsFromAssets = (
  assets: Record<string, any>,
  entryPoint: string,
  extra = ''
) =>
  (assets &&
    assets[entryPoint]?.js
      .filter((asset: string) => !asset.endsWith('hot-update.js'))
      .map((asset: string) => `<script src="${asset}"${extra}></script>`)
      .join('')) ||
  '';

const app = fastify();

if (!isProd) {
  app.register(fastifyStatic, {
    root: process.env.APP_PUBLIC_DIR,
    prefix: '/public/',
  });
}

app.register(cookie, {});
app.get('/*', (req, res) => {
  const { colorScheme } = req.cookies;
  const config: React.ComponentProps<typeof App> = {
    userPreferences: {
      colorScheme: colorScheme || 'auto',
      preferedColorScheme: req.headers['sec-ch-prefers-color-scheme'] as string,
    },
  };
  const context: { url?: string } = {};
  const markup = renderToString(
    <Helmet.HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url}>
        <App {...config} />
      </StaticRouter>
    </Helmet.HelmetProvider>
  );

  const { helmet } = helmetContext;

  if (context.url) {
    res.redirect(context.url);
  } else {
    res
      .status(200)
      .type('text/html')
      .send(
        `<!doctype html>
      <html ${helmet?.htmlAttributes?.toString()}>
      <head>
          <link rel="shortcut icon" type="image/jpg" href="/public/favicon.ico" />
          <meta charset="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital@0;1&family=Vollkorn&display=swap" rel="stylesheet">
          ${helmet?.title?.toString()}
          ${helmet?.meta?.toString()}
          ${helmet?.link?.toString()}
          <style>${[atlasGetCssText(), getCssText()].join('')}</style>
          <meta name="description" content="Haja Rasoahaingo personal page.">
      </head>
      <body>
          <div id="root">${markup}</div>
          <script>__APP_DATA__ = ${JSON.stringify(config)};</script>
          ${jsScriptTagsFromAssets(
            assetsImport,
            'client',
            ' defer crossorigin'
          )}
      </body>
  </html>`
      );
  }
});

export default async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  await app.ready();
  app.server.emit('request', req, res);
};
