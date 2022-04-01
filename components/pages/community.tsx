import Channel from '@components/community/channel';
import Layout from '@components/layout';
import Section from '@components/layout/section';
import { TwitterHandle } from '@components/follow-us-on-twitter';
import { channels } from 'contents/community';
import cn from 'classnames';
import styles from './community.module.css';
import { title } from 'process';

export const DiscordLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="141" height="48" viewBox="0 0 141 48">
    <path
      className="fill"
      d="M25.168 21.188c-1.004 0-1.797.864-1.797 1.94s.81 1.94 1.797 1.94c1.005 0 1.798-.864 1.798-1.94s-.81-1.94-1.798-1.94zm-6.433 0c-1.004 0-1.797.864-1.797 1.94s.81 1.94 1.797 1.94c1.005 0 1.798-.864 1.798-1.94.018-1.076-.793-1.94-1.798-1.94z"
    ></path>
    <path
      className="fill"
      d="M33.734 6.508H10.117a3.62 3.62 0 00-3.614 3.616v23.639a3.62 3.62 0 003.614 3.616h19.986l-.934-3.228 2.256 2.081 2.133 1.958 3.807 3.3V10.123c-.018-1.993-1.64-3.616-3.631-3.616zm-6.803 22.844s-.635-.758-1.164-1.41c2.31-.654 3.19-2.082 3.19-2.082-.722.476-1.41.811-2.026 1.04-.882.37-1.728.6-2.556.759-1.692.317-3.243.23-4.565-.018a13.406 13.406 0 01-2.59-.758 10.322 10.322 0 01-1.287-.6c-.053-.035-.106-.053-.159-.088-.035-.018-.053-.036-.07-.036a6.166 6.166 0 01-.494-.3s.846 1.394 3.084 2.064c-.528.67-1.18 1.447-1.18 1.447-3.896-.123-5.376-2.664-5.376-2.664 0-5.627 2.538-10.196 2.538-10.196 2.538-1.888 4.935-1.835 4.935-1.835l.176.212c-3.172.9-4.617 2.293-4.617 2.293s.387-.211 1.04-.494c1.885-.829 3.383-1.04 4-1.11.106-.019.194-.036.3-.036a14.903 14.903 0 013.56-.035c1.674.194 3.472.687 5.305 1.675 0 0-1.392-1.323-4.388-2.222l.246-.283s2.415-.053 4.935 1.835c0 0 2.538 4.569 2.538 10.196 0-.017-1.48 2.523-5.375 2.646zm26.613-15.294h-5.851v6.58l3.895 3.51v-6.386h2.08c1.322 0 1.974.636 1.974 1.659v4.886c0 1.023-.617 1.711-1.974 1.711h-5.993v3.722h5.852c3.137.018 6.08-1.552 6.08-5.15v-5.258c.018-3.669-2.925-5.274-6.063-5.274zm30.668 10.531v-5.398c0-1.94 3.49-2.381 4.547-.44l3.226-1.306c-1.27-2.787-3.578-3.599-5.5-3.599-3.137 0-6.239 1.817-6.239 5.345v5.398c0 3.564 3.102 5.346 6.17 5.346 1.973 0 4.335-.97 5.64-3.511L88.6 24.836c-.846 2.17-4.389 1.64-4.389-.247zm-10.663-4.657c-1.216-.264-2.027-.705-2.08-1.464.07-1.817 2.873-1.887 4.512-.141l2.591-1.993c-1.621-1.976-3.454-2.505-5.34-2.505-2.873 0-5.658 1.623-5.658 4.692 0 2.981 2.291 4.587 4.812 4.975 1.286.176 2.714.688 2.679 1.57-.106 1.675-3.56 1.587-5.13-.318l-2.502 2.346c1.463 1.888 3.454 2.84 5.323 2.84 2.873 0 6.063-1.658 6.186-4.692.176-3.828-2.608-4.798-5.393-5.31zm-11.809 9.79h3.948V14.059H61.74v15.665zm66.57-15.664h-5.852v6.58l3.895 3.51v-6.386h2.08c1.322 0 1.974.636 1.974 1.659v4.886c0 1.023-.617 1.711-1.974 1.711h-5.992v3.722h5.869c3.137.018 6.08-1.552 6.08-5.15v-5.258c0-3.669-2.943-5.274-6.08-5.274zm-28.711-.212c-3.243 0-6.469 1.764-6.469 5.38v5.346c0 3.58 3.243 5.38 6.504 5.38 3.243 0 6.468-1.8 6.468-5.38v-5.345c0-3.599-3.26-5.38-6.503-5.38zm2.538 10.726c0 1.129-1.269 1.71-2.52 1.71-1.27 0-2.539-.546-2.539-1.71v-5.345c0-1.147 1.234-1.764 2.468-1.764 1.286 0 2.591.546 2.591 1.764v5.345zm18.136-5.345c-.088-3.67-2.591-5.151-5.816-5.151H108.2V29.74h4.001v-4.974h.705l3.63 4.974h4.935l-4.265-5.38c1.886-.6 3.067-2.24 3.067-5.133zm-5.746 2.116h-2.326v-3.58h2.326c2.485 0 2.485 3.58 0 3.58z"
    ></path>
  </svg>
);

const Community = () => (
  <Layout>
    <div className="row">
      <Section className={styles.section}>
        <h1 className="heading-secondary">Join us on Discord</h1>
        <p>
        Let’s meet on our Discord DevX channels to get to know each other, exchange knowledge and share experiences. It’s a place to foster professional and personal growth and to simply have a great time together.
        </p>
        <a
          href="https://discord.gg/BwknNDDXJu"
          target="_blank"
          className={cn('btn btn--big', styles.link)}
          rel="noopener noreferrer"
        >
          Go to <DiscordLogo />
        </a>

        {/* <div className={styles.channels}>
          <h2 className="heading-tertiary">Recommended Channels</h2>
          <div className={styles['channel-container']}>
            {channels.map(channel => (
              <Channel key={title} {...channel} />
            ))}
          </div>
        </div> */}

        <div className={styles.follow}>
          <h2 className="heading-tertiary">Stay updated - follow us on Twitter</h2>
          <TwitterHandle />
        </div>
      </Section>
    </div>
  </Layout>
);

export default Community;
