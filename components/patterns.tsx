import { patternCircleDataPoints, patternHalfCircleDataPoints, patternQuadrantDataPoints } from "contents/svgDataPoints";

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
    <mask id="half-circle" width="737" height="737" x="-510" y="-4" maskUnits="userSpaceOnUse">
      <path
        fill="url(#paint0_radial)"
        d={patternHalfCircleDataPoints}
      ></path>
    </mask>
    <g mask="url(#half-circle)">
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
        <stop offset="0.484" stopColor="#FF8A00"></stop>
        <stop offset="0.922" stopColor="#FFAE33"></stop>
      </radialGradient>
      <radialGradient
        id="paint1_radial"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(90 -202.208 116.167) scale(330.239)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.318" stopColor="#FF8A00"></stop>
        <stop offset="0.957" stopColor="#FFAE33" stopOpacity="0"></stop>
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
        id="circle"
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
      <g mask="url(#circle)">
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
          <stop offset="0.484" stopColor="#FF8A00"></stop>
          <stop offset="0.922" stopColor="#FF8A00"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="scale(229.459 247.19) rotate(90 -.003 .98)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#FF8A00"></stop>
          <stop offset="0.957" stopColor="#A99278" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
)

export const PatternQuadrantTop = ({ className, styles, isInverted }: PatternProps) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="143"
      height="135"
      fill="none"
      viewBox="0 0 143 135"
      className={cn(className, isInverted ? moduleStyles.inverted : null)}
      style={styles}
    >
      <mask
        id="quadrant"
        width="216"
        height="218"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="url(#paint0_radial)"
          d={patternQuadrantDataPoints}
        ></path>
      </mask>
      <g mask="url(#quadrant)">
        <ellipse
          cx="194.522"
          cy="156.853"
          fill="url(#paint1_radial)"
          rx="144.51"
          ry="155.677"
        ></ellipse>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(69.44649 -88.54101 88.18221 69.16506 100.34 116.324)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.484" stopColor="#FF8A00"></stop>
          <stop offset="0.922" stopColor="#FF8A00"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="scale(149.954 161.541) rotate(90 .163 1.134)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.234" stopColor="#FF8A00"></stop>
          <stop offset="0.957" stopColor="#A99278" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
)