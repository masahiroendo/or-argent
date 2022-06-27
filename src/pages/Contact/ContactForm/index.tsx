import { FC, FormEvent, useContext } from 'react';
import { Button, Text, Textarea } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

import styles from './styleForForm.module.scss';
import { FormContext } from '../FormContext';

export type FormContent = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  onSubmitCallback: (content: FormContent) => void;
};

const ContactForm: FC<ContactFormProps> = ({ onSubmitCallback }) => {
  const {
    fields: { firstName, lastName, email, message },
  } = useContext(FormContext);

  let formIsValid = false;

  if (firstName.isValid && lastName.isValid && email.isValid && message.isValid) {
    formIsValid = true;
  }

  const formSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    onSubmitCallback({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    });
  };

  const inputStyle = (hasError: boolean): string => {
    return hasError ? `${styles['form-control']} ${styles['invalid']}` : styles['form-control'];
  };

  const firstNameClasses = inputStyle(firstName.hasError);
  const lastNameClasses = inputStyle(lastName.hasError);
  const emailClasses = inputStyle(email.hasError);
  const messageClasses = inputStyle(message.hasError);

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles['control-group']}>
        <fieldset className={firstNameClasses}>
          <label htmlFor="text">First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstName.value}
            onChange={firstName.valueChangeHandler}
            onBlur={firstName.inputBlurHandler}
          />
          {firstName.hasError && <span className={styles['error-text']}>Please enter your First Name</span>}
        </fieldset>
        <fieldset className={lastNameClasses}>
          <label htmlFor="text">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastName.value}
            onChange={lastName.valueChangeHandler}
            onBlur={lastName.inputBlurHandler}
          />
          {lastName.hasError && <p className={styles['error-text']}>Please enter your last Name</p>}
        </fieldset>
        <fieldset className={emailClasses}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email.value}
            onChange={email.valueChangeHandler}
            onBlur={email.inputBlurHandler}
          />
          {email.hasError && <p className={styles['error-text']}>Please enter your email</p>}
        </fieldset>
        <fieldset className={messageClasses}>
          <Text mb="8mb">Your message</Text>
          <Textarea
            id="message"
            required
            size="sm"
            value={message.value}
            onChange={message.valueChangeHandler}
            onBlur={message.inputBlurHandler}
            placeholder="Type your message here..."
          />
          {message.hasError && <p className={styles['error-text']}>Type a message to confirm</p>}
        </fieldset>
        <Button disabled={!formIsValid} type="submit" leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
          Email
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
