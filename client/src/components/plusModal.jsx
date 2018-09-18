import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../src/search.css';

var PlusModal = ({ data, buttonHandler, onClickHandler }) => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalHeader}>
        <div className={styles.plusTitle}>{data.name}</div>
        <div className={`${styles.close} ${styles.plus}`} onClick={buttonHandler}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
      </div>
      <div className={styles.plusContainer}>
        {data.picture.map((picture, index) => {
          return (
            <div
              className={styles.popupImg}
              onClick={() => {
                onClickHandler(picture);
              }}
            >
              <img src={picture} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlusModal;
