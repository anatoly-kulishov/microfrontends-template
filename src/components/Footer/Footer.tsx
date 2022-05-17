import React, { FC, memo } from 'react';

import { AUTHOR_LINKED_URL, PROJECT_NAME } from '../../constants/general';
import styles from './Footer.module.scss';

export const Footer: FC = memo(() => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.Wrapper}>
      © {currentYear} {PROJECT_NAME} <br />
      <a href={AUTHOR_LINKED_URL} target="_blank" rel="noopener noreferrer">
        Developed by Anatoly
      </a>
    </div>
  );
});
