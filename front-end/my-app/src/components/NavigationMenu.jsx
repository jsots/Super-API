import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/account/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
