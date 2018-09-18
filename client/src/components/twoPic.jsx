import React from 'react';
import Onepic from './onePic.jsx';
import styles from '../../src/search.css';

var TwoPic = ({ pictureOne, pictureTwo, onClickHandler }) => {
  return (
    <div className={styles.picDiv}>
      <div className={styles.onePicCol}>
        <div className={styles.onePicWrapper}>
          <div className={styles.onePicZoom}>
            <img
              src={pictureOne}
              onClick={() => {
                onClickHandler(pictureOne);
              }}
            />
          </div>
        </div>
        <div className={styles.onePicWrapper}>
          <div className={styles.onePicZoom}>
            <img
              src={pictureTwo}
              onClick={() => {
                onClickHandler(pictureTwo);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoPic;
