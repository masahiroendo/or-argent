import { FC, useState } from 'react';
import ContactForm from './ContactForm';
import MessageModal from './MessageModal';
import { FormContextProvider } from './FormContext';

const Contact: FC = () => {
  const [opened, setOpened] = useState(false);

  const openModal = () => {
    setOpened(true);
  };

  const closeModal = () => {
    setOpened(false);
  };

  return (
    <FormContextProvider>
      {opened && <MessageModal onCancel={closeModal} />}
      <ContactForm onSubmitCallback={openModal} />
    </FormContextProvider>
  );
};

export default Contact;
