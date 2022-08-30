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
import CreateAccount from '../pages/CreateAccount';
import ProductDetails from '../pages/ProductDetails';
import Products from '../pages/Products';
import Profile from '../pages/Profile';
import ProtectedRoute from './ProtectedRoute';
import CartPage from '../pages/Cart';
import CheckOut from '../pages/Cart/CheckOut';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path={ROUTES.CALLBACK} element={<CallBack />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={`${ROUTES.CART}/${ROUTES.CHECKOUT}`} element={<CheckOut />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.CREATE_ACCOUNT} element={<CreateAccount />} />
        <Route path={ROUTES.CREATE_ACCOUNT} element={<CreateAccount />} />
        <Route path={`${ROUTES.METAL}/:metal`} element={<MetalPage />} />
        <Route path={`${ROUTES.PRODUCTS}/:slug`} element={<ProductDetails />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.STORING} element={<Storing />} />
        <Route path={ROUTES.UNDER_CONSTRUCTION} element={<UnderConstruction />} />

        {/* Private Routes */}
        <Route path={ROUTES.HOME} element={<ProtectedRoute />}>
          <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Route>

        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
