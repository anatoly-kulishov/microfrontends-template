import React, { useEffect } from 'react';
import ReactModal from 'react-modal';

import './Modal.scss';

interface ModalProps extends ReactModal.Props {
  overlayClassName?: string;
  onRequestClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, ...modalProps }) => {
  const classes = [];

  if (modalProps.overlayClassName) {
    classes.push(modalProps.overlayClassName);
  }

  useEffect(() => {
    return function cleanup() {
      modalProps.onRequestClose(); // auto-close modal when unmounted
    };
  }, []);

  return (
    <ReactModal
      {...modalProps}
      className={'CustomModalWindow'}
      ariaHideApp={false}
      overlayClassName={`CustomModalOverlay ${classes.join(' ')}`}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
