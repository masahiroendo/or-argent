import { FC, FormEvent } from 'react';
import styles from './styleForForm.module.scss';
import useInput from '../../hooks/use-input';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constant';
import { Button, Text, Textarea } from '@chakra-ui/react';

const inputCheck = (value: string) => value.trim() !== '';
const emailCheck = (value: string) => value.includes('@');

const ContactForm: FC = () => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput(inputCheck);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput(inputCheck);

  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useInput(inputCheck);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(emailCheck);

  const navigate = useNavigate();

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    firstNameReset();
    lastNameReset();
    emailReset();
    messageReset();
    // TODO: send email and:
    //   - display a success/failure modal with a content
    navigate(ROUTES.HOME, { replace: true });
  };

  const inputStyle = (hasError: boolean): string => {
    return hasError ? `${styles['form-control']} ${styles['invalid']}` : styles['form-control'];
  };

  const firstNameClasses = inputStyle(firstNameHasError);
  const lastNameClasses = inputStyle(lastNameHasError);
  const emailClasses = inputStyle(emailHasError);
  const messageClasses = inputStyle(messageHasError);

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles['control-group']}>
        <fieldset className={firstNameClasses}>
          <label htmlFor="text">First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <span className={styles['error-text']}>Please enter your First Name</span>}
        </fieldset>
        <fieldset className={lastNameClasses}>
          <label htmlFor="text">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className={styles['error-text']}>Please enter your last Name</p>}
        </fieldset>
        <fieldset className={emailClasses}>
          fields <label htmlFor="email">Email address</label>
          <input type="email" id="email" value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
          {emailHasError && <p className={styles['error-text']}>Please enter your email</p>}
        </fieldset>
        <fieldset className={messageClasses}>
          <Text mb="8mb">Your message</Text>
          <Textarea
            id="message"
            required
            size="sm"
            value={message}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            placeholder="Type your message here..."
          />
          {messageHasError && <p className={styles['error-text']}>Type a message to confirm</p>}
        </fieldset>
        <Button disabled={!formIsValid} type="submit">
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
