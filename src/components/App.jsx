import { Header } from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
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
          <Header />
          <RegistrationPage />
          <LoginPage />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
