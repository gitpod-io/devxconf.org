import { patternHalfCircleDataPoints, patternSquareDataPoints } from "contents/svgDataPoints";

import { CSSProperties } from "react";
import cn from 'classnames';
import moduleStyles from './patterns.module.css';

interface PatternHalfCircleProps {
    className?: string
    styles?: CSSProperties
    isInverted?: boolean
}

export const PatternHalfCircle = ({ 
    className, 
    styles,
    isInverted
}: PatternHalfCircleProps) => (
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