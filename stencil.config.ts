import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png,jpg,svg}'
        ]
      }
    },
    {
      type: 'docs'
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'theme-scss/abstracts/functions.scss',
        'theme-scss/abstracts/mixins.scss',
        'theme-scss/abstracts/variables.scss'
      ]
    })
  ],
  copy: [
    { src: 'robots.txt' }
  ]
};
