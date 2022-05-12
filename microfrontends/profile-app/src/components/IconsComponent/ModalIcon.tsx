import React, { FC } from 'react';

import styles from './IconComponent.module.scss';

type ModalIconPropsType = {
  size?: string;
  fill?: string;
  onClick?: () => void;
};

export const ModalIcon: FC<ModalIconPropsType> = ({ size = '16px', fill = '#fff', onClick }) => {
  return (
    <svg
      className={styles.ModalIcon}
      onClick={onClick}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <path fill={fill} d="M0 4v11h16v-14h-16v3zM14 2h1v1h-1v-1zM1 4h14v10h-14v-10z"></path>
      <path fill={fill} d="M3 6h2v1h-2v-1z"></path>
      <path fill={fill} d="M6 6h7v1h-7v-1z"></path>
      <path fill={fill} d="M3 8h2v1h-2v-1z"></path>
      <path fill={fill} d="M6 8h7v1h-7v-1z"></path>
      <path fill={fill} d="M3 10h2v1h-2v-1z"></path>
      <path fill={fill} d="M6 10h7v1h-7v-1z"></path>
    </svg>
  );
};
