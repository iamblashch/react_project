import { BrowserRouter } from 'react-router-dom';
// import { Header } from './Header/Header';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
// import { LoginPage } from 'pages/LoginPage/LoginPage';
// import { DashboardPage } from '../pages/DashboardPage/DashboardPage';

export const App = () => {
  return (
    <BrowserRouter basename="/react_project">
      {/* <DashboardPage /> */}
      <RegistrationPage />
    </BrowserRouter>
  );
};
