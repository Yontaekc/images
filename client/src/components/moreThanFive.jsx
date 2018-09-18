import React from 'react';
import OnePic from './onePic.jsx';
import TwoPic from './twoPic.jsx';
import styles from '../../src/search.css';

var MoreThanFive = ({ pictures, onClickHandler }) => {
  return (
    <div className={styles.inner}>
      <OnePic pictures={pictures[0]} onClickHandler={onClickHandler} />
      <TwoPic pictureOne={pictures[1]} pictureTwo={pictures[2]} onClickHandler={onClickHandler} />
      <OnePic pictures={pictures[3]} onClickHandler={onClickHandler} />
      <TwoPic pictureOne={pictures[4]} pictureTwo={pictures[5]} onClickHandler={onClickHandler} />
      <OnePic pictures={pictures[6]} onClickHandler={onClickHandler} />
      <TwoPic pictureOne={pictures[7]} pictureTwo={pictures[8]} onClickHandler={onClickHandler} />
    </div>
  );
};

export default MoreThanFive;
