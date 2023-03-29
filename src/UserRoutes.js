import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import Loader from './components/Loader/Loader';

const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/diagram" element={<SummaryPage />} />
          <Route path="/currency" element={<CurrencyPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;