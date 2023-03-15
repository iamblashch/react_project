import { BrowserRouter } from "react-router-dom";

import Navigation from "./Navigation/Navigation";

export const App = () => {
  return (
   <>
    <BrowserRouter basename="/react_project">
    <Navigation />
    </BrowserRouter>
   </>
  );
};
