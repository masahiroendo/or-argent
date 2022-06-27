import { FC, Fragment, PropsWithChildren, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

type BackdropProps = {
  onClose: () => void;
};

const Backdrop: FC<PropsWithChildren<BackdropProps>> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

type ModalOverlayProps = {};

const ModalOverlay: FC<PropsWithChildren<ModalOverlayProps>> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

type ModalProps = {
  onClose: () => void;
};

const Modal: FC<PropsWithChildren<ModalProps>> = ({ onClose, children }) => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    event.key === 'Escape' && onClose();
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement!)};
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement!)};
    </Fragment>
  );
};

export default Modal;
