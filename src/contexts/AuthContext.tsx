import { createContext, FC, useState, PropsWithChildren } from 'react';

const timeout = 2000;

export type User = {
  userName: string;
  email: string;
};

type AuthContextType = {
  me: User | null;
  signedIn: boolean;
  signIn: (userName: string, email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
};

const SESSION_KEY = 'session';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const getUserFromStorage = (): User | null => {
  const parsed = localStorage.getItem(SESSION_KEY);
  if (!parsed) {
    return null;
  }

  const userData = JSON.parse(parsed) as User;
  return userData;
};

export const AuthContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<User | null>(getUserFromStorage);
  const [signedIn, setSignedIn] = useState(() => !!getUserFromStorage());

  const signIn = (userName: string, email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setSignedIn(true);
        const newUser = { userName, email };
        setUser(newUser);
        localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
        resolve(true);
      }, timeout);
    });
  };

  const signOut = async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setSignedIn(false);
        setUser(null);
        localStorage.removeItem(SESSION_KEY);
        resolve();
      }, timeout);
    });
  };

  const value: AuthContextType = {
    me: user,
    signedIn,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
