import { BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { Header } from './Header/Header';
// import { LoginPage } from 'pages/LoginPage/LoginPage';
import Loader from './Loader/Loader';

const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      {/* <BrowserRouter basename="/react_project"> */}
      {/* <Header /> */}
      <RegistrationPage />
      {/* </BrowserRouter> */}
    </Suspense>
  );
};
