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

import type { AppProps, AppContext } from 'next/app';

const REDIRECT_URL = 'https://ona.com';

function App({ Component, pageProps }: AppProps) {
  return null;
}

App.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: REDIRECT_URL });
    ctx.res.end();
  }
  
  return { pageProps: {} };
};

export default App;
