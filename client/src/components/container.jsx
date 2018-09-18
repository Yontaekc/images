import React from 'react';
import styles from '../../src/search.css';
import MoreThanFive from './moreThanFive.jsx';
import LessThanFive from './lessThanFive.jsx';

var Container = ({ pictures, onClickHandler }) => {
  return (
    <div className={styles.container}>
      {pictures.length > 5 ? (
        <MoreThanFive pictures={pictures} onClickHandler={onClickHandler} />
      ) : (
        <LessThanFive pictures={pictures} onClickHandler={onClickHandler} />
      )}
    </div>
  );
};

export default Container;
