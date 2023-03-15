import { Header } from './Header/Header';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};
