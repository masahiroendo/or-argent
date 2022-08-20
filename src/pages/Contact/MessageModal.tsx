import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CircularProgress,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { FC, PropsWithChildren, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormContent } from './ContactForm';
import { FormContext } from './FormContext';
import GoldButton from '../../components/buttons/GoldButton';
import SilverButton from '../../components/buttons/SilverButton';

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
  const { t } = useTranslation(['translation', 'contact']);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<ModalError | null>(null);

  const {
    fields: { firstName, lastName, telephone, email, subject, message },
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
        {
          firstName: firstName.value,
          lastName: lastName.value,
          telephone: telephone.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        },
        () => {
          resetContent();
          updateSentContent({
            firstName: firstName.value,
            lastName: lastName.value,
            telephone: telephone.value,
            email: email.value,
            subject: subject.value,
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

  const messageSummaryContent = (
    <>
      <Text>{`${t('firstname')}: ${firstName.value}`}</Text>
      <Text>{`${t('lastname')}: ${lastName.value}`}</Text>
      <Text>{`${t('email')}: ${email.value}`}</Text>
      <Text>{`${t('subject', { ns: 'contact' })}: ${subject.value}`}</Text>
      <Text>{`${t('message', { ns: 'contact' })}: ${message.value}`}</Text>
    </>
  );

  const messageSentContent = (
    <>
      <Text as="p">
        {sentContent.firstName} {sentContent.lastName}
      </Text>
      <Text as="p">
        {t('email')}: {sentContent.email}
      </Text>
    </>
  );

  const errorContent = (
    <>
      <Text>There was an error while sending your message</Text>
      <Text>Reason of the error: {error?.message}</Text>
      <SilverButton onClick={onCancel}>{t('back')}</SilverButton>
    </>
  );

  return (
    <Modal isOpen={true} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{sent ? t('message-sent', { ns: 'contact' }) : t('please-verify', { ns: 'contact' })}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!sent && !error && messageSummaryContent}
          {sent && messageSentContent}
          {error && errorContent}
        </ModalBody>
        <ModalFooter>
          {sent ? (
            <GoldButton onClick={handleCloseBtn}>{t('back')}</GoldButton>
          ) : (
            <GoldButton
              mr={3}
              isLoading={isSending}
              loadingText="Submitting"
              onClick={onSendConfirm}
              spinner={<CircularProgress isIndeterminate color="green.300" size={6} />}>
              {t('send-message', { ns: 'contact' })}
            </GoldButton>
          )}
          {!sent && (
            <SilverButton onClick={onCancel} disabled={isSending}>
              {t('back')}
            </SilverButton>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MessageModal;
