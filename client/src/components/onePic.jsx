import React from 'react';
import styles from '../../src/search.css';

var OnePic = ({ pictures, onClickHandler }) => {
  return (
    <div className={styles.picDiv}>
      <div className={styles.onePicCol}>
        <div className={styles.onePicWrapper}>
          <div className={styles.onePicZoom}>
            <img
              src={pictures}
              onClick={() => {
                onClickHandler(pictures);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePic;
