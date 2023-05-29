import React from "react";

import Navbar from "./components/Navbar.js"
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import PaymentPage from './Pages/PaymentPage';
import RegistrationPage from './Pages/RegistrationPage';

import { Route } from "react-router-dom";


function App() {
  return (
      <div className="wrapper">
        <Navbar/>
        <div className="content">
          <Route path= "/" component={ HomePage } exact />
          <Route path= "/cart" component={ CartPage } exact />
          <Route path= "/payment" component={ PaymentPage } exact />
          <Route path= "/registration" component={ RegistrationPage } exact />
        </div>
      </div>
  );
}

export default App;
