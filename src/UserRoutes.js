import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';

import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import { Route, Routes } from 'react-router-dom';

const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);

export const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<RegistrationPage />} />
        <Route path="/home" element={<DashboardPage />} />
      </Routes>
    </Suspense>
  );
};
