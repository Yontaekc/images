import React from 'react';
import styles from '../../src/search.css';

var Button = ({ pictures, buttonHandler }) => {
  return (
    <div className={styles.button} onClick={buttonHandler}>
      <span className={styles.buttonName}>{pictures.length} photos</span>
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#FFFFFF" fill="none" fill-rule="evenodd">
          <path d="M18.808 12.13H4.25M11.53 4.85v14.558" />
        </g>
      </svg>
    </div>
  );
};

export default Button;
