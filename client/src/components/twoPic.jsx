import React from 'react';
import Onepic from './onePic.jsx';

var TwoPic = ({ pictureOne, pictureTwo, onClickHandler }) => {
  return (
    <div className="picDiv">
      <div className="onePic-col">
        <div className="onePic-wrapper">
          <div className="onePic-zoom">
            <img
              src={pictureOne}
              onClick={() => {
                onClickHandler(pictureOne);
              }}
            />
          </div>
        </div>
        <div className="onePic-wrapper">
          <div className="onePic-zoom">
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
