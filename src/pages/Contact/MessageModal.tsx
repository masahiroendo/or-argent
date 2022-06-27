import { Button, CircularProgress } from '@chakra-ui/react';
import { FC, Fragment, PropsWithChildren, useState } from 'react';
import { FormContent } from './ContactForm';
import Modal from '../../components/Modal';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import { useNavigate } from 'react-router-dom';

type MessageModalProps = {
  onCancel: () => void;
};

const sentEmailWithContent = (content: FormContent, callback: () => void): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject(false);
      callback();
      resolve(true);
    }, 3000);
  });
};

type ModalError = {
  message: string;
};

const MessageModal: FC<PropsWithChildren<MessageModalProps>> = ({ onCancel }) => {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<ModalError | null>(null);

  const {
    fields: { firstName, lastName, email, message },
    updateSentContent,
    resetContent,
    sentContent,
  } = useContext(FormContext);

  const navigate = useNavigate();
  const handleCloseBtn = () => {
    navigate('/', { replace: true });
  };

  const onSendConfirm = async () => {
    try {
      setError(null);
      setSent(false);
      setIsSending(true);
      await sentEmailWithContent(
        { firstName: firstName.value, lastName: lastName.value, email: email.value, message: message.value },
        () => {
          resetContent();
          updateSentContent({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            message: message.value,
          });
        },
      );
      setSent(true);
      setIsSending(false);
    } catch (error) {
      setIsSending(false);
      setError({ message: 'Email server failed to respond.' });
    }
  };

  const messageSummaryModal = (
    <Fragment>
      <div>
        Verify the content of your message below and click on the Send button to send the email to {email.value}.
      </div>
      <div>
        <span>
          Dear {firstName.value} {lastName.value}
        </span>
      </div>
      <div>Email Address: {email.value}</div>
      <div>Message: {message.value}</div>
      <div>
        <Button onClick={onCancel} disabled={isSending}>
          Back
        </Button>
        <Button
          isLoading={isSending}
          loadingText="Submitting"
          onClick={onSendConfirm}
          spinner={<CircularProgress isIndeterminate color="green.300" size={6} />}>
          Send
        </Button>
      </div>
    </Fragment>
  );

  const messageSentModal = (
    <Fragment>
      <div>
        Your message was sent to the following recipient:
        <p>
          name: {sentContent.firstName} {sentContent.lastName}
        </p>
        <p>email: {sentContent.email}</p>
      </div>
      <Button onClick={handleCloseBtn}>Back to Home</Button>
    </Fragment>
  );

  const errorModal = (
    <Fragment>
      <div>There was an error while sending your message</div>
      <div>Reason of the error: {error?.message}</div>
      <Button onClick={onCancel}>Back</Button>
    </Fragment>
  );

  return (
    <Modal onClose={onCancel}>
      {!sent && !error && messageSummaryModal}
      {sent && messageSentModal}
      {error && errorModal}
    </Modal>
  );
};

export default MessageModal;
