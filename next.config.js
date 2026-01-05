/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  target: 'serverless',
  images: {
    domains: [
      'www.datocms-assets.com',
      'a.storyblok.com',
      'images.ctfassets.net',
      'images.prismic.io',
      'cdn.aglty.io'
    ],
    imageSizes: [24, 64, 300]
  },
  env: {
    IS_PRODUCTION: process.env.IS_PRODUCTION,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    SPREADSHEET_ID: process.env.SPREADSHEET_ID,
    SHEET_ID: '0',
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
    GITHUB_OAUTH_CLIENT_SECRET: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    NEXT_PUBLIC_SITE_ORIGIN: process.env.NEXT_PUBLIC_SITE_ORIGIN,
    // DATOCMS_READ_ONLY_API_TOKEN: process.env. DATOCMS_READ_ONLY_API_TOKEN,
  },
  webpack: (config, options) => {
    config.node = {
      // Some libraries import Node modules but don't use them in the browser.
      // Tell Webpack to provide empty mocks for them so importing them works.
      ...config.node,
      fs: 'empty',
      child_process: 'empty',
      net: 'empty',
      tls: 'empty'
    };

    return config;
  }
};
