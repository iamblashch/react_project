import { Header } from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RegistrationPage />
    </BrowserRouter>



