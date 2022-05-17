import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';

import { LoginForm } from './components/LoginForm/LoginForm';
import { PROJECT_NAME } from './constants/general';
import { store } from './store';
import styles from './App.module.scss';

export function App() {
  return (
    <div className={styles.Wrapper}>
      <div className="container">
        <div className={styles.Row}>
          <h2 className={styles.Title}>{PROJECT_NAME}</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export const AppWithSettings = (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
