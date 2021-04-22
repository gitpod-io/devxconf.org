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

 import Document, { Html, Head, Main, NextScript } from 'next/document';
 import { GA_TRACKING_ID, IS_PRODUCTION } from 'lib/constants';
 
 export default class CustomDocument extends Document {
   render(): JSX.Element {
     return (
       <Html lang="en">
         <Head>
           {IS_PRODUCTION && (
             <>
               <script
                 async
                 src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                 />
               <script
                 // eslint-disable-next-line react/no-danger
                 dangerouslySetInnerHTML={{
                   __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${GA_TRACKING_ID}', {
                     page_path: window.location.pathname,
                   });
                   `,
                 }}
                 />
             </>
           )}
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     );
   }
 }