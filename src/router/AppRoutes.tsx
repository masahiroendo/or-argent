import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './constant';
import Layout from '../components/Layout';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import MetalPage from '../pages/Metal';
import CallBack from '../pages/Contact/CallBack';
import Storing from '../pages/Storing';
import UnderConstruction from '../pages/UnderConstruction';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path={`${ROUTES.METAL}/:metal`} element={<MetalPage />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.CALLBACK} element={<CallBack />} />
        <Route path={ROUTES.STORING} element={<Storing />} />
        <Route path={ROUTES.UNDER_CONSTRUCTION} element={<UnderConstruction />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
