import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
// import  SummaryPage  from './pages/SummaryPage/SummaryPage';
import { CurrencyPage } from 'pages/CurrencyPage/CurrencyPage';

const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const SummaryPage = lazy(() => import('pages/SummaryPage/SummaryPage'));

export const UserRoutes = () => {
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
