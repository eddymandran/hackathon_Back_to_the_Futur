/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ close }) => (
  <div className='menu'>
    <ul>
      <li>
        <NavLink onClick={close} activeClassName='current' to='/'>
          Home
        </NavLink>
      </li>
      {/* <li>
        <NavLink onClick={close} activeClassName='current' to='/info'>
          Prevenez-nous
        </NavLink>
      </li> */}
    </ul>
  </div>
);
