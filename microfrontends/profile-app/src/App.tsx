import React from 'react';

import { PROJECT_NAME } from './constants/general';
import styles from './App.module.scss';

export function App() {
  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>{PROJECT_NAME}</h2>
    </div>
  );
}
