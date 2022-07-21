import { Navigate } from 'react-router-dom';
import { ROUTES } from '../router/constant';

const NavigateToNotFound = () => {
  return (
    <>
      <Navigate to={`/${ROUTES.NOT_FOUND}`} replace={true} />
    </>
  );
};

export default NavigateToNotFound;
