import { FC, FormEvent, useContext } from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

import ContactLinks from './ContactLinks';
import { FormContext } from '../FormContext';

import styles from './styleContactForm.module.scss';
import { COLORS } from '../../../constants/colors';

export type FormContent = {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormProps = {
  onSubmitCallback: (content: FormContent) => void;
};

const ContactForm: FC<ContactFormProps> = ({ onSubmitCallback }) => {
  const {
    fields: { firstName, lastName, telephone, email, subject, message },
  } = useContext(FormContext);

  const formBg = useColorModeValue(COLORS.GOLD, COLORS.SILVER);

  let formIsValid = false;

  if (
    firstName.isValid &&
    lastName.isValid &&
    telephone.isValid &&
    email.isValid &&
    subject.isValid &&
    message.isValid
  ) {
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
      telephone: telephone.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    });
  };

  const inputStyle = (hasError: boolean, size: number = 6): string => {
    const col = `col-${size}`;
    return hasError
      ? `${styles[col]} ${styles['form-control']} ${styles['invalid']}`
      : `${styles[col]} ${styles['form-control']}`;
  };

  const inputStyleHalf = (hasError: boolean) => {
    return inputStyle(hasError, 6);
  };

  const inputStyleFull = (hasError: boolean) => {
    return inputStyle(hasError, 12);
  };

  const firstNameClasses = inputStyleHalf(firstName.hasError);
  const lastNameClasses = inputStyleHalf(lastName.hasError);
  const telephoneClasses = inputStyleHalf(telephone.hasError);
  const emailClasses = inputStyleHalf(email.hasError);
  const subjectClasses = inputStyleFull(subject.hasError);
  const messageClasses = inputStyleFull(message.hasError);

  return (
    <div className={styles['contact-container']}>
      <ContactLinks />

      <div className={`${styles['contact-form-container']} ${styles['col-9']}`}>
        <form
          onSubmit={formSubmitHandler}
          className={`${styles['contact-form']} ${styles['col-9']}`}
          style={{ backgroundColor: formBg }}>
          <div className={styles['control-group']}>
            <div className={styles['col-12']}>
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
            </div>
            <div className={styles['col-12']}>
              <fieldset className={telephoneClasses}>
                <label htmlFor="string">Telephone</label>
                <input
                  type="text"
                  id="telephone"
                  value={telephone.value}
                  onChange={telephone.valueChangeHandler}
                  onBlur={telephone.inputBlurHandler}
                />
                {telephone.hasError && <p className={styles['error-text']}>Please enter your telephone number</p>}
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
            </div>
            <div className={styles['col-12']}>
              <fieldset className={subjectClasses}>
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  value={subject.value}
                  onChange={subject.valueChangeHandler}
                  onBlur={subject.inputBlurHandler}
                />
                {subject.hasError && <p className={styles['error-text']}>Please enter your subject</p>}
              </fieldset>
            </div>
            <div className={styles['col-12']}>
              <fieldset className={messageClasses}>
                <label>Votre message</label>
                <textarea
                  id="message"
                  required
                  value={message.value}
                  onChange={message.valueChangeHandler}
                  onBlur={message.inputBlurHandler}
                  placeholder="Type your message here..."
                />
                {message.hasError && <p className={styles['error-text']}>Type a message to confirm</p>}
              </fieldset>
            </div>
            <Button disabled={!formIsValid} type="submit" leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
              Email
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
