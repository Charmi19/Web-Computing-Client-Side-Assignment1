import React from "react";
//import Api from "./Api";
import { Link } from "react-router-dom";

// navigation links
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/Api"> Stocks</Link>
        </li>      
        <li>
          <Link to="/Quotes"> Quotes</Link>
        </li>
        <li>
          <Link to="/PriceHistory"> PriceHistory</Link>
        </li>
        <li>
          <Link to="/Register"> Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
  } 

  