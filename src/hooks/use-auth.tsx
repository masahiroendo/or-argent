import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext, { User } from '../contexts/AuthContext';
import { ROUTES } from '../router/constant';

type UseAuthType = {
  processing: boolean;
  me: User | null;
  signedIn: boolean;
  signIn: (userName: string, email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
};

const useAuth = (): UseAuthType => {
  const [processing, setProcessing] = useState(false);
  const { me, signedIn, signIn, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return {
    processing: processing,
    me,
    signIn: async (userName: string, email: string, password: string): Promise<boolean> => {
      try {
        setProcessing(true);
        const success = await signIn(userName, email, password);
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
        navigate(ROUTES.HOME, { replace: true });
      } catch (err) {
        console.error(err);
      }
      setProcessing(false);
    },
    signedIn,
  };
};

export default useAuth;
