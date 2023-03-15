import { Header } from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';

import { LoginPage } from 'pages/LoginPage/LoginPage';


export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RegistrationPage /> 
      <LoginPage />
    </BrowserRouter>
  );
};
