import { useContext, useState } from 'react';

import AuthContext, { User } from '../contexts/AuthContext';

type UseAuthType = {
  authenticating: boolean;
  me: User;
  signedIn: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
};

const useAuth = (): UseAuthType => {
  const [authenticating, setAuthenticating] = useState(false);
  const { me, signedIn, signIn } = useContext(AuthContext);

  return {
    authenticating,
    me,
    signIn: async (email: string, password: string): Promise<boolean> => {
      try {
        setAuthenticating(true);
        const success = await signIn(email, password);
        setAuthenticating(false);
        return success;
      } catch (err) {
        console.error(err);
      }
      setAuthenticating(false);
      return false;
    },
    signedIn,
  };
};

export default useAuth;
