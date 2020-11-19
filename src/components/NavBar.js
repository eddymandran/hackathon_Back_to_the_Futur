import React from 'react';
import '../styles/NavBar.css';
import BurgerMenu from './Burgermenu';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {/* <li>
            <Link to='/XXXXXXXXXX'>XXXXXXXXX</Link>
          </li>
          <li>
            <Link to='/XXXXXXXXXX'>XXXXXX</Link>
          </li>
          <li>
            <Link to='/XXXXXXXXXX'>XXXXXXXXXXXX</Link>
          </li>
         */}
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
}
