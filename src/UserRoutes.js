import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';

// import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';

const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);

export const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>

        <Route element = {<PublicRoute/>}>
          <Route path='/register' element = {<RegistrationPage/>}/>
        </Route>
       
      </Routes>
    </Suspense>
  );
};
