import React from 'react';
import styles from './loading-spinner.module.css';

const LoadingSpinner = ({
  height,
  width,
  borderWidth
}: {
  height?: number;
  width?: number;
  borderWidth?: number;
}) => <div className={styles.spinner} style={{ height, width, borderWidth }}></div>;

export default LoadingSpinner;
