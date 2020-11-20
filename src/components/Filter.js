import React, { useState, useEffect } from 'react';
import '../style/Filter.css';
import castles from '../data/castles.json';

const Filter = () => {
  const [castles, setCastles] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div className='filter'>
      <span>
        <h3>Net Worth per Castle</h3>
      </span>
      <select>
        <option value='level1'>💰</option>
        <option value='level2'>💰💰</option>
        <option value='level3'>💰💰💰</option>
        <option value='level4'>💰💰💰💰</option>
        <option value='level5'>💰💰💰💰💰</option>
      </select>
    </div>
  );
};
export default Filter;
