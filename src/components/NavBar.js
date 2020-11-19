import React from 'react';
import '../style/NavBar.css';
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
          <li>
            <Link to='/Targets'>Targets</Link>
          </li>
          <li>
            <Link to='/info'>Contact us</Link>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
}
