import { createContext, FC, useState, PropsWithChildren } from 'react';

const timeout = 3000;

export type User = {
  email: string;
};

type AuthContextType = {
  me: User;
  signedIn: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const signIn = (email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setSignedIn(true);
        setEmail(email);
        resolve(true);
      }, timeout);
    });
  };

  const value: AuthContextType = {
    me: { email },
    signedIn,
    signIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
