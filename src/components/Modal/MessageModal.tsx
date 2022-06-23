// import { Button } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import Modal from '../Modal';
// import { CircularProgress } from "@chakra-ui/react";

type MessageModalProps = {};

const MessageModal: FC<PropsWithChildren<MessageModalProps>> = (props) => {
  return (
    <Modal>
      By clicking send Button display a modal with the summary of the message, then confirming by clicking on the button
      it will turn into a spinner and once sent to the recipient the modal will change into a success/failure modal ?
      {/* <Button>Cancel</Button>
      <Button>Send</Button>
      <CircularProgress isIndeterminate color="green.300" /> */}
    </Modal>
  );
};

export default MessageModal;
