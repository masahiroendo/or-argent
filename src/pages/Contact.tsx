import { FC, Fragment } from 'react';
import ContactForm from '../components/ContactForm';
import MessageModal from '../components/Modal/MessageModal';

const Contact: FC = () => {
  return (
    <Fragment>
      <h1>Contact page</h1>
      <MessageModal />
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
