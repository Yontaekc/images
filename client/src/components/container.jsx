import React from 'react';
import styles from '../../src/search.css';
import MoreThanFive from './moreThanFive.jsx';
import LessThanFive from './lessThanFive.jsx';
import Button from './button.jsx';

var Container = ({ pictures, onClickHandler, buttonHandler }) => {
  return (
    <div className={styles.container}>
      {pictures.length > 5 ? (
        <MoreThanFive pictures={pictures} onClickHandler={onClickHandler} />
      ) : (
        <LessThanFive pictures={pictures} onClickHandler={onClickHandler} />
      )}
      <Button pictures={pictures} buttonHandler={buttonHandler} />
    </div>
  );
};

export default Container;
