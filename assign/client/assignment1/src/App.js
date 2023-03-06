import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import Nav from "./Nav";
import Api from "./Api";
import Quotes from "./Quotes";
import Login from "./Login";
import Register from "./Register";
import PriceHistory from "./PriceHistory";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import { Link } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/Api">Stocks</Link>
          </li>
          <li>
            <Link to="/Quotes">Quotes</Link>
          </li>
          <li>
            <Link to="/PriceHistory">PriceHistory</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>

      

        <Route exact path="/" component={HomePage} />
        <Route exact path="/Quotes/:symbol" component={Quotes} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Api" component={Api} />
        <Route path="/PriceHistory/:symbol" component={PriceHistory} />


      </div>
    </Router>
  );
}

 

 