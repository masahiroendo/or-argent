import { FC, Fragment, PropsWithChildren, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

type BackdropProps = {
  onCancel: () => void;
};

const Backdrop: FC<PropsWithChildren<BackdropProps>> = ({ onCancel }) => {
  return <div className={classes.backdrop} onClick={onCancel} />;
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
  onCancel: () => void;
};

const Modal: FC<PropsWithChildren<ModalProps>> = ({ onCancel, children }) => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    event.key === 'Escape' && onCancel();
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCancel={onCancel} />, portalElement!)};
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement!)};
    </Fragment>
  );
};

export default Modal;
