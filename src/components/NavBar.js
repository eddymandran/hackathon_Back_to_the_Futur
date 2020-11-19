import React from 'react';
import '../styles/NavBar.css';
import BurgerMenu from './Burgermenu';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export default function NavBar() {
  return (
    <header>
      <Link to='/'>
        <img src={logo} alt='hat' className='logo' />
      </Link>
      <nav>
        <ul>
          <li></li>
          <li>
            <Link to='/'>Occire Elites</Link>
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
