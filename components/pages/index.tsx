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

import { ConfDataContext, PageState, UserData } from '@lib/hooks/use-conf-data';

import About from '../about';
import ConfContainer from '../conf-container';
import FollowUsOnTwitter from '@components/follow-us-on-twitter';
import Hero from '../index/hero';
import Layout from '../layout';
import Partners from '@components/index/partners';
// import SpeakersGrid from '@components/speakers-grid';
import Ticket from '../ticket';
import { useState } from 'react';

type Props = {
  defaultUserData: UserData;
  sharePage?: boolean;
  defaultPageState?: PageState;
};

export default function Conf({
  defaultUserData,
  sharePage,
  defaultPageState = 'registration'
}: Props) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [pageState, setPageState] = useState<PageState>(defaultPageState);

  return (
    <ConfDataContext.Provider
      value={{
        userData,
        setUserData,
        setPageState
      }}
    >
      <Layout>
        <ConfContainer>
          {pageState === 'registration' && !sharePage ? (
            <>
              <Hero />
              {/* <SpeakersGrid speakers={speakers}/> */}
              <Partners />
              <FollowUsOnTwitter />
              <About />
            </>
          ) : (
            <Ticket
              username={userData.username}
              name={userData.name}
              ticketNumber={userData.ticketNumber}
              sharePage={sharePage}
            />
          )}
        </ConfContainer>
      </Layout>
    </ConfDataContext.Provider>
  );
}
