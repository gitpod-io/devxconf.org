import IconGithub from '@components/icons/icon-github';
import { Project as ProjectProps } from '@lib/types';
import React, { useState } from 'react';
import cn from 'classnames';
import styles from './project.module.css';
import useSWR from 'swr';
import LoadingSpinner from '@components/loading-spinner';
import Login from './login'

const IconSite = () => (
  <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15">
    <path
      fill="#8E8787"
      d="M12.593 12.927H1.574V1.908h5.51V.334h-5.51C.7.334 0 1.042 0 1.908v11.019c0 .865.7 1.574 1.574 1.574h11.019a1.58 1.58 0 001.574-1.574v-5.51h-1.574v5.51zM8.657.334v1.574h2.826L3.746 9.645l1.11 1.11 7.737-7.737v2.825h1.574V.334h-5.51z"
    ></path>
  </svg>
);

const Project = ({ logo, title, description, github, website }: ProjectProps) => {
  const [isAlreadyVoted, setIsAlreadyVoted] = useState(false);
  const [shown, setShown] = useState(false);

  const fetcher = (url: string, title: string) =>
    fetch(`${url}?title=${title}`).then(res => res.json());

  const { data } = useSWR(['/api/vote', title], fetcher, {
    initialData: {},
    revalidateOnMount: true
  });

  const isLoggedIn = () => {
    // Todo Use cookie to check whether the user is logged in.
    return localStorage.getItem('isLoggedIn') === `true`;
  };

  const addVote = async () => {
    try {
      const response = await fetch('/api/vote', {
        body: JSON.stringify({ title }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });

      if (response.status === 200) {
        data.voteCount += 1;
        setIsAlreadyVoted(true);
      } else if (response.status === 400) {
        console.log('Error.');
      } else if (response.status === 409) {
        setIsAlreadyVoted(true);
      }
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const handleClick = () => {
    if (!isLoggedIn()) {
      setShown(true)
    } else {
      addVote();
    }
  };

  return (
    <>
      <div className={styles.project}>
        <img className={styles.logo} src={`/projects/${logo}`} alt={title} />
        <div className={styles.description}>
          {description}
          <div className={styles.icons}>
            <a href={github} target="_blank">
              <IconGithub color="#8E8787" size={20} />
            </a>
            {website ? (
              <a href={website} target="_blank">
                <IconSite />
              </a>
            ) : null}
          </div>
        </div>
        {/* <div className={styles.votes}>
          <a
            role="button"
            tabIndex={isAlreadyVoted ? -1 : 0}
            className={cn('btn', styles.btn)}
            href="https://discord.gg/JMj6YjBg6e"
          >Vote in Discord
          </a>
        </div> */}
      </div>
      <Login shown={shown} setShown={setShown} />
    </>
  );
};

export default Project;
