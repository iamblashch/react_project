import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { PersistGate } from 'redux-persist/integration/react';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import Loader from './Loader/Loader';

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
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
