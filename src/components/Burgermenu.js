import React from 'react';
import Popup from 'reactjs-popup';
import BurgerIcon from './BurgerIcon';
import Menu from './Menu';
import '../style/Burger.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  marginTop: '40px',
};
const contentStyle = {
  background: '#012f6b',
  width: '100%',
  border: 'none',
};

const BurgerMenu = () => (
  <div style={styles}>
    <Popup
      modal
      overlayStyle={{ background: '#012f6b', top: '79px', zIndex: '1000' }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={(open) => <BurgerIcon open={open} />}
    >
      {(close) => <Menu close={close} />}
    </Popup>
  </div>
);

export default BurgerMenu;
