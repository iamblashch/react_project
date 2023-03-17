import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from 'pages/LoginPage/LoginPage';
import {DashboardPage} from './pages/DashboardPage/DashboardPage';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';


const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);

export const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<DashboardPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Route>

        {/* <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegistrationPage />} />
        </Route> */}
      </Routes>
    </Suspense>
  );
};
