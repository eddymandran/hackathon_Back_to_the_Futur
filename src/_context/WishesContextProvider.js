import React, { createContext, useState, useEffect } from 'react';

export const WishesContext = createContext();

const WishesContextProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('wishes')) || [];

  const [wishes, setWishes] = useState([...initialState]);

  useEffect(() => {
    localStorage.setItem('wishes', JSON.stringify(wishes));
  }, [wishes]);

  const clear = () => {
    setWishes([]);
  };

  const addWishes = (castle) => {
    setWishes((wishes) => {
      const alreadyExists = wishes.includes(castle);
      if (alreadyExists) {
        alert('You have already add this castle in your wishes list');
        return wishes;
      } else {
        const wishesTmp = [...wishes, castle];
        return wishesTmp;
      }
    });
  };

  return (
    <WishesContext.Provider value={{ wishes, addWishes, clear }}>
      {children}
    </WishesContext.Provider>
  );
};
export default WishesContextProvider;
