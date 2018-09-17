import React from 'react';

var OnePic = ({ pictures, onClickHandler }) => {
  return (
    <div className="picDiv">
      <div className="onePic-col">
        <div className="onePic-wrapper">
          <div className="onePic-zoom">
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
