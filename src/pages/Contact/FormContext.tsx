import { createContext, FC, FormEvent, PropsWithChildren, useState } from 'react';

import useInput, { UseInputType } from '../../hooks/use-input';
import { FormContent } from './ContactForm';

const inputCheck = (value: string) => value.trim() !== '';
const emailCheck = (value: string) => value.includes('@');
const defaultUseInput: UseInputType = {
  value: '',
  isValid: false,
  hasError: false,
  valueChangeHandler: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {},
  inputBlurHandler: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {},
  reset: () => {},
};

export type FormContextProps = {
  fields: {
    firstName: UseInputType;
    lastName: UseInputType;
    telephone: UseInputType;
    email: UseInputType;
    subject: UseInputType;
    message: UseInputType;
  };
  updateSentContent: (editedContent: FormContent) => void;
  resetContent: () => void;
  sentContent: FormContent;
};

export const FormContext = createContext<FormContextProps>({
  fields: {
    firstName: defaultUseInput,
    lastName: defaultUseInput,
    telephone: defaultUseInput,
    subject: defaultUseInput,
    email: defaultUseInput,
    message: defaultUseInput,
  },
  updateSentContent: (editedContent: FormContent) => {},
  resetContent: () => {},
  sentContent: { firstName: '', lastName: '', telephone: '', email: '', subject: '', message: '' },
});

export const FormContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [sentContent, updateSentContent] = useState<FormContent>({
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
    subject: '',
    message: '',
  });
  const firstNameInput = useInput(inputCheck);
  const lastNameInput = useInput(inputCheck);
  const emailInput = useInput(emailCheck);
  const telephoneInput = useInput(inputCheck);
  const subjectInput = useInput(inputCheck);
  const messageInput = useInput(inputCheck);

  const resetContent = () => {
    firstNameInput.reset();
    lastNameInput.reset();
    telephoneInput.reset();
    emailInput.reset();
    subjectInput.reset();
    messageInput.reset();
  };

  const contextValue: FormContextProps = {
    fields: {
      firstName: firstNameInput,
      lastName: lastNameInput,
      telephone: telephoneInput,
      email: emailInput,
      subject: subjectInput,
      message: messageInput,
    },
    updateSentContent,
    sentContent,
    resetContent,
  };

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
};
