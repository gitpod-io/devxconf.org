import React from 'react';
import cn from 'classnames';
import styles from './text-wrapper.module.css';

interface TextWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const TextWrapper = ({ children }: TextWrapperProps) => (
  <div className="row">
    <div className={cn("wrapper-small", styles.wrapper)}>{children}</div>
  </div>
);

export default TextWrapper;
