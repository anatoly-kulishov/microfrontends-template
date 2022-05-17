import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { GlobalStore } from 'redux-micro-frontend';
import classNames from 'classnames';

import { AppRoutesEnum, AppRoutesTitleEnum, GlobalStoreFoldersEnum, logOutGAC } from '../../globalStoreUtils';
import { PROJECT_NAME } from '../../constants/general';
import styles from './Header.module.scss';

const globalStore = GlobalStore.Get();

export const Header: FC = memo(() => {
  const onLogOut = () => {
    globalStore.DispatchGlobalAction(GlobalStoreFoldersEnum.MAIN_PORTAL, logOutGAC());
  };

  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.Title}>
        <Link to={AppRoutesEnum.HOME}>{PROJECT_NAME}</Link>
      </h3>
      <nav className={styles.Navigation}>
        <Link className={'link-primary'} to={AppRoutesEnum.HOME}>
          {AppRoutesTitleEnum.HOME}
        </Link>
        <Link className={'link-primary'} to={AppRoutesEnum.PROFILE}>
          {AppRoutesTitleEnum.PROFILE}
        </Link>
        <Link className={'link-primary'} to={AppRoutesEnum.MESSENGER}>
          {AppRoutesTitleEnum.MESSENGER}
        </Link>
        <button className={classNames('btn btn-danger', styles.LogOutButton)} onClick={onLogOut}>
          Log out
        </button>
      </nav>
    </div>
  );
});
