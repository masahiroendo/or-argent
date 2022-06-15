import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './constant';
import Layout from '../components/Layout';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
