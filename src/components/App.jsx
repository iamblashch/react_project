import { BrowserRouter, } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { store, persistor } from '../redux/store';
import { Provider } from 'react-redux';
import Loader from './Loader/Loader';

import { PersistGate } from 'redux-persist/integration/react';

// import { LoginPage } from 'pages/LoginPage/LoginPage';
// import { DashboardPage } from 'pages/DashboardPage/DashboardPage';

const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);

export const App = () => {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/react_project">
          <Suspense fallback={<Loader />}>
            <RegistrationPage />
            <LoginPage/>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>

  );
};
