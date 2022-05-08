import React, { FC, memo } from 'react';

import { PROJECT_NAME } from '../../constants/general';
import styles from './Footer.module.scss';

export const Footer: FC = memo(() => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.Wrapper}>
      © {currentYear} {PROJECT_NAME} <br />
      <a href="https://www.linkedin.com/in/anatoliy-kulishov/" target="_blank" rel="noopener noreferrer">
        Developed by by Anatoly
      </a>
    </div>
  );
});
