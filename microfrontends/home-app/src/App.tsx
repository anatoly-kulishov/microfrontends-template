import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';

import { getModalState } from './store/selectors/modal-selectors';
import { store, useActions, useTypedSelector } from './store';
import { PROJECT_NAME } from './constants/general';
import Modal from './components/Modal/Modal';
import styles from './App.module.scss';

export function App() {
  const { openModalAC, closeModalAC } = useActions();
  const { isModalOpen } = useTypedSelector(getModalState);

  const openModalHandler = () => {
    openModalAC();
  };

  const closeModalHandler = () => {
    closeModalAC();
  };

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>{PROJECT_NAME}</h2>

      <Modal
        style={{ content: { width: '696px' } }}
        isOpen={isModalOpen}
        onRequestClose={closeModalHandler}
        closeTimeoutMS={200}
      >
        <div className="modal-wrap">
          <div style={{ padding: '32px 48px' }}>
            <div className="modal-header">
              <h3 className="modal-title">Modal Header</h3>
              <h4 className="modal-subtitle">Modal Subheader</h4>
            </div>
            <div className="modal-body">
              Modal body <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, omnis!
            </div>
          </div>
          <div className="modal-footer footer-with-border" style={{ padding: '40px 48px 48px' }}>
            <button onClick={closeModalHandler} className="btn btn-lg btn-outline-secondary mr-2">
              CANCEL
            </button>
            <button className="btn btn-lg btn-primary">Done</button>
          </div>
        </div>
      </Modal>
      <button onClick={openModalHandler}>Open Modal</button>
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
