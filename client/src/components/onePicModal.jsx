import React from 'react';
import ShowAll from './modalButtons/showAll.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTh, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

var OnePicModal = ({ picture, restaurant, onCloseHandler, onLeftClick, onRightClick }) => {
  return (
    <div className="onePicModal">
      <div className="onePicHeader">
        <span>{restaurant.name}</span>
        <div className="showAll-wrapper">
          <div className="pictureNum">
            {restaurant.picture.indexOf(picture) + 1} of {restaurant.picture.length}
          </div>
          <div className="showAll">
            <FontAwesomeIcon icon={faTh} size="2x" />
          </div>
          <div className="close" onClick={onCloseHandler}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
        </div>
      </div>
      <div className="onePicImg">
        <div className="onePicContainer">
          <div
            className="onePicButton"
            onClick={() => {
              onLeftClick(picture);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </div>
          <img src={picture} />
          <div
            className="onePicButton"
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
