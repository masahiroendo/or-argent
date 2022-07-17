import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './constant';
import Layout from '../components/Layout';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import GoldPage from '../pages/GoldPage';
import SilverPage from '../pages/SilverPage';
import CallBack from '../pages/Contact/CallBack';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path={ROUTES.GOLD} element={<GoldPage />} />
        <Route path={ROUTES.SILVER} element={<SilverPage />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.CALLBACK} element={<CallBack />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
