import { BrowserRouter } from 'react-router-dom';
// import { Header } from './Header/Header';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
// import { LoginPage } from 'pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <BrowserRouter basename="/react_project">
      {/* <Header /> */}
      <RegistrationPage />
    </BrowserRouter>
  );
};
