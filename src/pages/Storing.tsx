import React from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '../router/constant';

type Props = {};

const Storing = (props: Props) => {
  return <Navigate to={`/${ROUTES.UNDER_CONSTRUCTION}`} />;
};

export default Storing;
