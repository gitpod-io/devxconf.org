import { patternCircleDataPoints, patternHalfCircleDataPoints } from "contents/svgDataPoints";

import { CSSProperties } from "react";
import cn from 'classnames';
import moduleStyles from './patterns.module.css';

interface PatternProps {
    className?: string
    styles?: CSSProperties
    isInverted?: boolean
}

export const PatternHalfCircle = ({ 
    className, 
    styles,
    isInverted
}: PatternProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="227"
    height="637"
    fill="none"
    viewBox="0 0 227 637"
    className={cn(className, isInverted ? moduleStyles.inverted : null)}
    style={styles}
  >
    <mask id="a" width="737" height="737" x="-510" y="-4" maskUnits="userSpaceOnUse">
      <path
        fill="url(#paint0_radial)"
        d={patternHalfCircleDataPoints}
      ></path>
    </mask>
    <g mask="url(#a)">
      <circle cx="-86.041" cy="318.375" r="318.25" fill="url(#paint1_radial)"></circle>
    </g>
    <defs>
      <radialGradient
        id="paint0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-51.606 318.275 368.004) scale(384.508 383.868)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.484" stopColor="#c29693"></stop>
        <stop offset="0.922" stopColor="#FF5043"></stop>
      </radialGradient>
      <radialGradient
        id="paint1_radial"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(90 -202.208 116.167) scale(330.239)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.318" stopColor="#FF5043"></stop>
        <stop offset="0.957" stopColor="#A99278" stopOpacity="0"></stop>
      </radialGradient>
    </defs>
  </svg>
);

export const PatternCircle = ({className, styles}: PatternProps) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="446"
      height="481"
      fill="none"
      viewBox="0 0 446 481"
      className={className}
      style={styles}
    >
      <mask
        id="a"
        width="446"
        height="481"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="url(#paint0_radial)"
          d={patternCircleDataPoints}
        ></path>
      </mask>
      <g mask="url(#a)">
        <ellipse
          cx="224.159"
          cy="243.111"
          fill="url(#paint1_radial)"
          rx="221.129"
          ry="238.216"
        ></ellipse>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-53.709 356.332 -76.074) scale(243.769 238.517)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.484" stopColor="#FF5043"></stop>
          <stop offset="0.922" stopColor="#FF5043"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="scale(229.459 247.19) rotate(90 -.003 .98)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#FF5043"></stop>
          <stop offset="0.957" stopColor="#A99278" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
)