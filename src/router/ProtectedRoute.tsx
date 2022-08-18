import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../hooks/use-auth';
import { ROUTES } from './constant';

const ProtectedRoute: FC = () => {
  const { signedIn } = useAuth();

  if (!signedIn) {
    return <Navigate to={`/${ROUTES.CREATE_ACCOUNT}`} replace={true} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
