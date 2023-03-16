import { BrowserRouter } from "react-router-dom";
import { Header } from './Header/Header';
import { BrowserRouter } from 'react-router-dom';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';

import Navigation from "./Navigation/Navigation";

export const App = () => {
  return (
   <>
    <BrowserRouter basename="/react_project">
     <Header />
      <RegistrationPage />
      <LoginPage />
    <Navigation />
    </BrowserRouter>
   </>
