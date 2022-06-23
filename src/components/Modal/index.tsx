import { FC, Fragment, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

const Backdrop: FC = (props) => {
  return <div className={classes.backdrop} />;
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

type ModalProps = {};

const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement!)};
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement!)};
    </Fragment>
  );
};

export default Modal;
