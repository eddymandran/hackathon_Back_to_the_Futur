import React, { useContext } from 'react';
import { WishesContext } from '../_context/WishesContextProvider';
import '../style/Target.css';

export default function Targets() {
  const { wishes, clear } = useContext(WishesContext);
  return (
    <div className='targetContainer'>
      <div className='targetCard'>
        {wishes.map((wish, id) => (
          <div classeName='castleWishe' key={wish.id}>
            <h1>{wish.properties.NAME}</h1>
            <p>{wish.properties.FORTUNE}</p>
            <img src={wish.properties.PICTURE} alt={wish.properties.NAME} />
            <p className='adress'>
              adress : {wish.properties.ADDRESS_FR}, {wish.properties.CP}{' '}
              {wish.properties.CITY}
            </p>
          </div>
        ))}
      </div>
      <div className='button_clear'>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}
