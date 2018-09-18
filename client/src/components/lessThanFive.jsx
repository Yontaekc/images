import React from 'react';
import OnePic from './onePic.jsx';
import styles from '../../src/search.css';

var LessThanFive = ({ pictures }) => {
  return (
    <div className={styles.inner}>
      {pictures.map((picture, index) => {
        return <OnePic key={index} pictures={picture} />;
      })}
    </div>
  );
};

export default LessThanFive;
