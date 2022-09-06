import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './constant';
import Account from '../pages/Account';
import Layout from '../components/Layout';
import CallBack from '../pages/Contact/CallBack';
import CartPage from '../pages/Cart';
import ChartPage from '../pages/Chart';
import CheckOut from '../pages/Cart/CheckOut';
import Contact from '../pages/Contact';
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import ProtectedRoute from './ProtectedRoute';
import Storing from '../pages/Storing';
import StripePaymentConfirmed from '../pages/Cart/StripePaymentConfirmed';
import UnderConstruction from '../pages/UnderConstruction';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path={ROUTES.CALLBACK} element={<CallBack />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={`${ROUTES.CART}/${ROUTES.CHECKOUT}`} element={<CheckOut />} />
        <Route path={`${ROUTES.CHART}/:metal`} element={<ChartPage />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.CREATE_ACCOUNT} element={<CreateAccount />} />
        <Route path={`${ROUTES.PRODUCTS}/:slug`} element={<ProductDetails />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.STORING} element={<Storing />} />
        <Route path={ROUTES.UNDER_CONSTRUCTION} element={<UnderConstruction />} />

        {/* Private Routes */}
        <Route path={ROUTES.HOME} element={<ProtectedRoute />}>
          <Route path={ROUTES.PROFILE} element={<Account />} />
          <Route path={ROUTES.STRIPE_PAYMENT_CONFIRMED} element={<StripePaymentConfirmed />} />
        </Route>

        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
