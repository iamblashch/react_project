import { BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { Header } from './Header/Header';
// import { LoginPage } from 'pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <BrowserRouter basename="/react_project">
      {/* <Header /> */}
      <RegistrationPage />
      {/* </BrowserRouter> */}
    </Suspense>
  );
};
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { PersistGate } from 'redux-persist/integration/react';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <RegistrationPage />
          <LoginPage />
        </BrowserRouter>
      </PersistGate>
    </Provider>
