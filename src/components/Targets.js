import React, { useContext } from 'react';
import { WishesContext } from '../_context/WishesContextProvider';
import '../style/Target.css';

export default function Targets() {
  const { wishes, clear } = useContext(WishesContext);
  return (
    <div>
      <div className='targetContainer'>
        <div className='targetCard'>
          {wishes.map((wish, id) => (
            <div className='castleWishe' key={id}>
              <h1>{wish.properties.NAME}</h1>
              <span>Net Worth per Castle: {wish.properties.FORTUNE} 💰</span>
              <div>
                <img src={wish.properties.PICTURE} alt={wish.properties.NAME} />
              </div>
              <p className='adress'>
                {wish.properties.ADDRESS_FR}, {wish.properties.CP}{' '}
                {wish.properties.CITY}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='button_clear'>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}
