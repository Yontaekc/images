import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTh, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../../src/styles.css';

var OnePicModal = ({
  picture,
  restaurant,
  onCloseHandler,
  onLeftClick,
  onRightClick,
  gridClickHandler
}) => {
  return (
    <div className={styles.onePicModal}>
      <div className={styles.onePicHeader}>
        <span>{restaurant.name}</span>
        <div className={styles.showAllWrapper}>
          <div className={styles.pictureNum}>
            {restaurant.picture.indexOf(picture) + 1} of {restaurant.picture.length}
          </div>
          <div className={styles.showAll} onClick={gridClickHandler}>
            <FontAwesomeIcon icon={faTh} size="2x" />
          </div>
          <div className="close" onClick={onCloseHandler}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
        </div>
      </div>
      <div className={styles.onePicImg}>
        <div className={styles.onePicContainer}>
          <div
            className={styles.onePicButton}
            onClick={() => {
              onLeftClick(picture);
            }}
          >
            <FontAwesomeIcon style={{ color: 'white' }} icon={faChevronLeft} size="2x" />
          </div>
          <img src={picture} />
          <div
            className={styles.onePicButton}
            onClick={() => {
              onRightClick(picture);
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePicModal;
