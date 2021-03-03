import React from 'react';
import Section from './layout/section';
import cn from 'classnames';
import styles from './about.module.css';

const About = () => (
  <div className="row">
    <Section className={styles.section}>
      <img src="/patterns/vertical-line.svg" className={styles.pattern} aria-hidden={true} />
      <div className={styles.contents}>
        <h2 className="heading-secondary">About</h2>
        <p>
          The conference is organized by Gitpod, an open-source developer platform for automated dev environments.
        </p>
        <div className={cn(styles.live, 'heading-quadrary')}>All About Devx</div>
        <a href="https://www.gitpod.io/" target="_blank" className={styles.link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="123"
            height="40"
            fill="none"
            viewBox="0 0 123 40"
          >
            <path
              className={styles.fill}
              d="M58.139 26.296c-1.216 1.267-3.092 1.966-5.286 1.966-4.19 0-7.349-3.291-7.353-7.664 0-4.46 3.127-7.699 7.44-7.703 1.987 0 3.917.662 5.485 1.882l.195.148v-1.611l-.045-.037c-1.537-1.182-3.518-1.806-5.726-1.804-5.043 0-8.843 3.915-8.84 9.101.005 5.187 3.81 9.093 8.852 9.089 2.698 0 5.087-.987 6.73-2.771l.03-.034V19.18h-1.486l.004 7.117zm7.426-9.03h-1.45v12.089h1.45v-12.09zm-.745-5.161a1.109 1.109 0 100 2.218 1.109 1.109 0 000-2.218zm8.201 1.36h-1.448v3.797h-2.998v1.325h3v7.498c0 2.299 1.146 3.564 3.22 3.562.909 0 1.907-.24 2.372-.569l.05-.035v-1.428l-.172.1a3.906 3.906 0 01-1.927.53c-1.542 0-2.09-.65-2.091-2.485v-7.175h4.364v-1.33h-4.364l-.006-3.79zm13.754 3.488c-1.946 0-3.613.757-4.742 2.14v-1.838h-1.447l.011 17.05h1.45v-6.812c1.14 1.394 2.811 2.155 4.745 2.152 3.502 0 6.14-2.724 6.137-6.348-.004-3.623-2.652-6.346-6.154-6.344zm4.67 6.338c0 2.846-2.112 4.994-4.914 4.996a5.034 5.034 0 01-4.498-2.831v-4.338a4.997 4.997 0 014.489-2.814c2.803-.01 4.922 2.142 4.922 4.988zm10.326-6.351c-3.657 0-6.42 2.741-6.42 6.371 0 3.63 2.763 6.317 6.42 6.313 3.658-.004 6.438-2.724 6.436-6.32.006-3.632-2.755-6.374-6.436-6.364zm0 1.35c2.831 0 4.968 2.152 4.969 5.013a4.954 4.954 0 11-9.907 0c0-2.853 2.123-5.011 4.94-5.011l-.002-.002zm19.768-6.571v7.364c-1.134-1.392-2.806-2.15-4.74-2.15-3.502 0-6.14 2.741-6.138 6.373 0 3.6 2.646 6.315 6.148 6.311 1.946 0 3.613-.755 4.741-2.14v1.832h1.448l-.012-17.594-1.447.004zm0 9.396v4.335a5.06 5.06 0 01-4.493 2.816c-2.803 0-4.918-2.14-4.92-4.964 0-2.86 2.111-5.02 4.913-5.021a5.123 5.123 0 014.508 2.834h-.008zM3.452 28.137V12.372L0 10.379V30.12l17.077 9.859v-4.034L3.452 28.137z"
            ></path>
            <path
              className={styles.fill}
              d="M17.077 31.905V20.24L6.954 14.393v11.713l10.123 5.8zM17.384 4l13.647 7.865 3.447-1.99L17.384 0 .29 9.873l3.46 1.996L17.383 4z"
            ></path>
            <path
              className={styles.fill}
              d="M27.527 13.889L17.386 8.043 7.251 13.891l10.133 5.852 10.143-5.854zM17.66 31.928l10.166-5.823V22.12l-7.006 3.987v-4.03l10.508-5.982v12.042L17.66 35.962v4.036l17.108-9.876V10.383L17.66 20.259v11.669z"
            ></path>
          </svg>
        </a>
      </div>
    </Section>
  </div>
);

export default About;
