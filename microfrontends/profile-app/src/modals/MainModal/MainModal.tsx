import React from 'react';
import { getModalState } from '../../store/selectors/modal-selectors';
import { useActions, useTypedSelector } from '../../store';
import Modal from '../../components/Modal/Modal';

export const MainModal = () => {
  const { closeModalAC } = useActions();
  const { isModalOpen } = useTypedSelector(getModalState);

  const closeModalHandler = () => {
    closeModalAC();
  };

  const doneModalHandler = () => {
    closeModalAC();
    // eslint-disable-next-line no-console
    console.log('doneModalHandler()');
  };

  return (
    <Modal
      style={{ content: { width: '696px' } }}
      onRequestClose={closeModalHandler}
      isOpen={isModalOpen}
      closeTimeoutMS={200}
    >
      <div className="modal-wrap">
        <div style={{ padding: '15px 50px 25px' }}>
          <div className="modal-header">
            <h3 className="modal-title">Modal Header</h3>
            <h4 className="modal-subtitle">Modal Subheader</h4>
          </div>
          <div className="modal-body">
            Modal body <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, omnis!
          </div>
        </div>
        <div className="modal-footer footer-with-border" style={{ padding: '25px 50px 40px' }}>
          <button onClick={closeModalHandler} className="btn btn-outline-secondary me-2">
            CANCEL
          </button>
          <button onClick={doneModalHandler} className="btn btn-primary">
            Done
          </button>
        </div>
      </div>
    </Modal>
  );
};
