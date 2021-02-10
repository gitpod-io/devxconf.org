import cn from 'classnames'
import { patternBarDataPoints } from 'contents/svgDataPoints';
import styles from './developer-productivity.module.css';

const DeveloperProductivity = () => (
  <div className="row">
    <div className={styles.section}>
      <div className={styles.header}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="195"
          fill="none"
          viewBox="0 0 15 195"
          className={styles.pattern}
        >
          <path
            fill="url(#paint0_radial)"
            d={patternBarDataPoints}
          ></path>
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(51.26309 -108.9559 108.87174 51.2235 12.737 105)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.318" stopColor="#FF5043"></stop>
              <stop offset="0.957" stopColor="#A99278" stopOpacity="0.28"></stop>
            </radialGradient>
          </defs>
        </svg>
        <h2 className={cn(styles.title, "heading-secondary")}>
          Bring back joy 
          <br />
          and speed to
          <br />
          our workflows.
        </h2>
      </div>
      <p>
      With DevX Conf we want to create a space for creators where we can start from first principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds to make developers feel like everything is at their fingertips. The goal is to foster an ecosystem that sparks dialogue and establishes best practices and frameworks across four different areas.
      </p>
    </div>
  </div>
);

export default DeveloperProductivity;
