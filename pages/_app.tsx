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

import '@styles/font.css';
import '@styles/global.css';
import '@styles/nprogress.css';

import { OverlayProvider, SSRProvider } from 'react-aria';

import type { AppProps } from 'next/app';
import NProgress from '@components/nprogress';
import ResizeHandler from '@components/resize-handler';
import { handleFirstTab } from 'utils/accessibility';
import { useEffect } from 'react';
import { useRouter } from "next/router";
import * as gtag from "lib/gtag";
import { IS_PRODUCTION } from '@lib/constants';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);

    const handleRouteChange = (url: URL) => {
        /* invoke analytics function only for production */
        if (IS_PRODUCTION) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
      
    return (): void => {
      window.removeEventListener('keydown', handleFirstTab);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <SSRProvider>
      <OverlayProvider>
        <Component {...pageProps} />
        <ResizeHandler />
        <NProgress />
      </OverlayProvider>
    </SSRProvider>
  );
}
