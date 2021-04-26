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

import * as qs from 'querystring';

import { NextApiRequest, NextApiResponse } from 'next';
import { renderAlreadyRegistered, renderError, renderSuccess } from '@lib/render-github-popup';

import { persistEmail } from '@lib/google-spreadsheet'

import { COOKIE } from '@lib/constants';
import cookie from 'cookie';
import ms from 'ms';

// import { nanoid } from 'nanoid';
// import redis from '@lib/redis';

type UserEmailsResponse = {
  email: string;
  primary: boolean;
  visibility: string;
};

/**
 * This API route must be triggered as a callback of your GitHub OAuth app.
 */
export default async function githubOAuth(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.code) {
    // This happens when user cancelled the authentication.
    // In this case, we send an empty message which indicates no data available.
    res.end(renderSuccess());
    return;
  }

  const q = qs.stringify({
    client_id: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID,
    client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    code: req.query.code
  });

  const accessTokenRes = await fetch(`https://github.com/login/oauth/access_token?${q}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json' 
    }
  });

  if (!accessTokenRes.ok) {
    console.error(
      `Failed to get access token: ${accessTokenRes.status} ${await accessTokenRes.text()}`
    );
    res.statusCode = 500;
    res.end(renderError());
    return;
  }

  const { access_token: accessToken } = await accessTokenRes.json();

  const userEmailRes = await fetch('https://api.github.com/user/emails', {
    headers: {
      Authorization: `token ${accessToken as string}`,
      Accept: "application/vnd.github.v3+json"
    }
  });

  if (!userEmailRes.ok) {
    console.error(`Failed to get GitHub user: ${userEmailRes.status} ${await userEmailRes.text()}`);
    res.statusCode = 500;
    res.end(renderError());
    return;
  }

  const userEmails:UserEmailsResponse[] = await userEmailRes.json();
  const userEmailDetails = userEmails.find(({visibility, primary}) => visibility === 'public' || primary);
  const userEmail = (userEmailDetails && userEmailDetails.email) || "";

  res.setHeader(
    'Set-Cookie',
    cookie.serialize(COOKIE, userEmail, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      path: '/api',
      expires: new Date(Date.now() + ms('7 days'))
    })
  );
  if (await persistEmail(userEmail)) {
    res.statusCode = 200;
    res.end(renderSuccess());
    return;
  } else {
    res.statusCode = 409;
    res.end(renderAlreadyRegistered());
    return;
  }


  // const userRes = await fetch('https://api.github.com/user', {
  //   headers: {
  //     Authorization: `bearer ${accessToken as string}`
  //   }
  // });

  // if (!userRes.ok) {
  //   console.error(`Failed to get GitHub user: ${userRes.status} ${await userRes.text()}`);
  //   res.statusCode = 500;
  //   res.end(renderError());
  //   return;
  // }

  // const user = await userRes.json();

  // if (redis) {
  //   const token = nanoid();
  //   const key = `github-user:${token}`;

  //   await redis
  //     .multi()
  //     .hmset(key, 'id', user.id, 'login', user.login, 'name', user.name || '')
  //     .expire(key, 60 * 10) // 10m TTL
  //     .exec();

  //   res.end(renderSuccess({ type: 'token', token }));
  // } else {
  //   res.end(renderSuccess({ type: 'user', login: user.login, name: user.name, email: user.email }));
  // }
}
