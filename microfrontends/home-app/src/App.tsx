import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';

import { ModalIcon } from './components/IconsComponent/ModalIcon';
import { Accordion } from './components/Accordion/Accordion';
import { MainModal } from './modals/MainModal/MainModal';
import { PROJECT_NAME } from './constants/general';
import { store, useActions } from './store';
import accordionData from './mock/accordion-data.json';
import styles from './App.module.scss';

export function App() {
  const { openModalAC } = useActions();

  const openModalHandler = () => openModalAC();

  return (
    <div className={styles.Wrapper}>
      <div className="container">
        <div className={styles.HeadRow}>
          <h2 className={styles.Title}>{PROJECT_NAME}</h2>
          <span className={styles.ModalIconWrapper}>
            <ModalIcon onClick={openModalHandler} />
          </span>
        </div>
        <Accordion data={accordionData} maxWidth={'700px'} />
      </div>
      <MainModal />
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
