import { useContext, useState } from 'react';

import AuthContext, { User } from '../contexts/AuthContext';

type UseAuthType = {
  processing: boolean;
  me: User | null;
  signedIn: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
};

const useAuth = (): UseAuthType => {
  const [processing, setProcessing] = useState(false);
  const { me, signedIn, signIn, signOut } = useContext(AuthContext);

  return {
    processing: processing,
    me,
    signIn: async (email: string, password: string): Promise<boolean> => {
      try {
        setProcessing(true);
        const success = await signIn(email, password);
        setProcessing(false);
        return success;
      } catch (err) {
        console.error(err);
      }
      setProcessing(false);
      return false;
    },
    signOut: async (): Promise<void> => {
      try {
        setProcessing(true);
        await signOut();
        setProcessing(false);
      } catch (err) {
        console.error(err);
      }
      setProcessing(false);
    },
    signedIn,
  };
};

export default useAuth;
