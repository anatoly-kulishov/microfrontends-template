import React, { FC, useEffect } from 'react';
import { GlobalStore } from 'redux-micro-frontend';

import { WithLoading } from './components/WithLoading/WithLoading';
import { AuthRoutes } from './routes/AuthRoutes/AuthRoutes';
import { AppRoutes } from './routes/AppRoutes/AppRoutes';
import { getLoginApiState } from './store/selectors/auth-selectors';
import { useTypedSelector } from './store';
import { checkAuthGAC, GlobalStoreFoldersEnum } from './globalStoreUtils';
import { SPINNER_SIZE } from './constants/general';
import styles from './App.module.scss';

const globalStore = GlobalStore.Get();

export const App: FC = () => {
  const { signInAccepted, isLoading } = useTypedSelector(getLoginApiState);

  useEffect(() => {
    globalStore.DispatchGlobalAction(GlobalStoreFoldersEnum.MAIN_PORTAL, checkAuthGAC());
  }, []);

  return (
    <WithLoading isLoading={isLoading} spinnerSize={SPINNER_SIZE}>
      <div className={styles.Wrapper}>{signInAccepted ? <AppRoutes /> : <AuthRoutes />}</div>
    </WithLoading>
  );
};
