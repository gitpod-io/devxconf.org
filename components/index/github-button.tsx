import { GitHubOAuthData } from '@lib/types';
import { SITE_ORIGIN } from '@lib/constants';
import { setIsLoggedIn } from 'utils/helpers';
import styles from './register-button.module.css';

const GitHubLogo = () => (
  <svg width="119" height="27" viewBox="0 0 119 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)" className="fill">
      <path d="M51.988 12.416h-6.976a.323.323 0 00-.326.32v3.342c0 .176.146.32.326.32h2.721v4.152s-.61.204-2.3.204c-1.993 0-4.777-.713-4.777-6.713s2.9-6.79 5.62-6.79c2.357 0 3.372.406 4.017.602.203.061.391-.137.391-.313l.778-3.23a.296.296 0 00-.124-.25C51.075 3.878 49.475 3 45.433 3 40.776 3 36 4.942 36 14.275 36 23.61 41.469 25 46.077 25c3.816 0 6.13-1.598 6.13-1.598.096-.052.106-.182.106-.242V12.736a.323.323 0 00-.325-.32zM87.936 4.118a.322.322 0 00-.324-.321h-3.928a.323.323 0 00-.325.321l.001 7.439h-6.122V4.118a.322.322 0 00-.324-.321h-3.927a.323.323 0 00-.325.321V24.26c0 .177.146.322.325.322h3.927c.18 0 .324-.145.324-.322v-8.616h6.122l-.01 8.616c0 .177.145.322.325.322h3.936c.18 0 .324-.145.325-.322V4.118zM59.399 6.762c0-1.386-1.134-2.506-2.533-2.506-1.397 0-2.532 1.12-2.532 2.506 0 1.385 1.135 2.508 2.532 2.508 1.4 0 2.533-1.123 2.533-2.508zM59.118 20.012v-9.297a.323.323 0 00-.325-.321h-3.915c-.18 0-.34.181-.34.358v13.32c0 .392.249.508.57.508h3.528c.387 0 .482-.186.482-.514v-4.054zM102.862 10.424h-3.898a.324.324 0 00-.324.322v9.876s-.99.71-2.395.71c-1.406 0-1.779-.625-1.779-1.974v-8.612a.323.323 0 00-.324-.322h-3.955a.324.324 0 00-.325.322v9.265c0 4.005 2.278 4.985 5.412 4.985 2.57 0 4.643-1.392 4.643-1.392s.099.734.143.82a.344.344 0 00.287.175l2.516-.01a.324.324 0 00.325-.322l-.001-13.521a.324.324 0 00-.325-.322zM111.977 21.32c-1.352-.041-2.269-.642-2.269-.642v-6.379s.905-.543 2.014-.64c1.404-.123 2.756.292 2.756 3.573 0 3.46-.61 4.143-2.501 4.087zm1.537-11.349c-2.214 0-3.719.968-3.719.968v-6.82a.322.322 0 00-.324-.322h-3.939a.323.323 0 00-.325.322V24.26c0 .178.146.322.326.322h2.732c.123 0 .216-.062.285-.17.068-.109.166-.93.166-.93s1.611 1.497 4.66 1.497c3.579 0 5.631-1.78 5.631-7.988 0-6.209-3.278-7.02-5.493-7.02zM70.406 10.39H67.46l-.004-3.815c0-.144-.076-.216-.247-.216h-4.015c-.156 0-.24.067-.24.214v3.942s-2.011.476-2.147.514a.32.32 0 00-.236.307v2.477c0 .178.146.322.325.322h2.059v5.96c0 4.425 3.168 4.86 5.305 4.86.977 0 2.145-.307 2.338-.377.117-.042.185-.16.185-.289l.003-2.725a.328.328 0 00-.326-.321c-.171 0-.61.068-1.063.068-1.447 0-1.937-.66-1.937-1.513v-5.663h2.946c.18 0 .325-.143.325-.322v-3.102a.322.322 0 00-.325-.321z" />
    </g>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.5 0C6.041 0 0 6.041 0 13.5c0 5.974 3.864 11.02 9.23 12.808.676.118.929-.287.929-.641 0-.32-.017-1.384-.017-2.515-3.392.625-4.27-.826-4.54-1.586-.151-.388-.81-1.586-1.383-1.907-.473-.253-1.148-.877-.017-.894 1.063-.017 1.822.979 2.075 1.384 1.215 2.042 3.156 1.468 3.932 1.113.119-.877.473-1.468.861-1.805-3.004-.338-6.143-1.502-6.143-6.666 0-1.468.524-2.683 1.384-3.628-.135-.337-.607-1.721.135-3.577 0 0 1.13-.355 3.713 1.383a12.528 12.528 0 013.375-.455c1.147 0 2.295.152 3.375.455 2.582-1.755 3.712-1.383 3.712-1.383.743 1.856.27 3.24.135 3.577.86.945 1.384 2.143 1.384 3.628 0 5.18-3.156 6.328-6.16 6.666.49.422.912 1.232.912 2.497 0 1.806-.017 3.257-.017 3.713 0 .354.253.776.928.641C23.136 24.52 27 19.457 27 13.5 27 6.041 20.959 0 13.5 0z"
      className="fill"
    />
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" transform="translate(36 3)" d="M0 0h83v22H0z" />
      </clipPath>
    </defs>
  </svg>
);

const GitHubButton = ({text, setLoggedIn}: {text: string, setLoggedIn?: Function}) => {
  const handleAuthorization = () => {
    const windowWidth = 600;
    const windowHeight = 700;
    // https://stackoverflow.com/a/32261263/114157
    const windowTop = window.top.outerHeight / 2 + window.top.screenY - 700 / 2;
    const windowLeft = window.top.outerWidth / 2 + window.top.screenX - 600 / 2;

    const openedWindow = window.open(
      `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
        // eslint-disable-next-line
        // @ts-ignore
        process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID
      )}&scope=user:email`,
      'githubOAuth',
      `resizable,scrollbars,status,width=${windowWidth},height=${windowHeight},top=${windowTop},left=${windowLeft}`
    );

    new Promise<GitHubOAuthData | undefined>(resolve => {
      const interval = setInterval(() => {
        if (!openedWindow || openedWindow.closed) {
          clearInterval(interval);
          resolve(undefined);
        }
      }, 250);

      window.addEventListener('message', function onMessage(msgEvent) {
        // When devtools is opened the message may be received multiple times
        if (SITE_ORIGIN !== msgEvent.origin || !msgEvent.data.type) {
          return;
        }
        clearInterval(interval);
        if (openedWindow) {
          openedWindow.close();
        }
        resolve(msgEvent.data);
      });
    })
      .then(data => {
        setIsLoggedIn();
        if (setLoggedIn) {
          setLoggedIn(true);
        }
        console.log(data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (
    <div className={styles['btn-wrapper']}>
      <button className="btn btn--big" onClick={() => handleAuthorization()}>
        {text} <GitHubLogo />
      </button>
    </div>
  );
};

export default GitHubButton;
