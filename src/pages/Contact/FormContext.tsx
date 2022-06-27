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
    email: UseInputType;
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
    email: defaultUseInput,
    message: defaultUseInput,
  },
  updateSentContent: (editedContent: FormContent) => {},
  resetContent: () => {},
  sentContent: { firstName: '', lastName: '', email: '', message: '' },
});

export const FormContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [sentContent, updateSentContent] = useState<FormContent>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const firstNameInput = useInput(inputCheck);
  const lastNameInput = useInput(inputCheck);
  const emailInput = useInput(emailCheck);
  const messageInput = useInput(inputCheck);

  const resetContent = () => {
    firstNameInput.reset();
    lastNameInput.reset();
    emailInput.reset();
    messageInput.reset();
  };

  const contextValue: FormContextProps = {
    fields: {
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: emailInput,
      message: messageInput,
    },
    updateSentContent,
    sentContent,
    resetContent,
  };

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
};
