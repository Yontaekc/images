import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

var PlusModal = ({ data, buttonHandler, onClickHandler }) => {
  return (
    <div id="modalContent">
      <div className="modalHeader">
        <div id="plusTitle">{data.name}</div>
        <div className="close plus" onClick={buttonHandler}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
      </div>
      <div className="plusContainer">
        {data.picture.map((picture, index) => {
          return (
            <div
              className="popup-img"
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
