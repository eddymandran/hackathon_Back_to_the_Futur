import React from 'react';
import '../styles/NavBar.css';
import BurgerMenu from './Burgermenu';
import { Link } from 'react-router-dom';
import Info from './Info';
import Targets from './Targets';

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Info'>{Info}</Link>
          </li>
          <li>
            <Link to='/Targets'>{Targets}</Link>
          </li>

          {/* <li>
            <Link to='/XXXXXXXXXX'>XXXXXXXXXXXX</Link>
          </li>
          */}
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
}
