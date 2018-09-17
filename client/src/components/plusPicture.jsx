import React from 'react';

var PlusPicture = () => {
  return (
    <div>
      {data.picture.map((picture, index) => {
        return (
          <div className="popup-img">
            <img src={picture} />
          </div>
        );
      })}
    </div>
  );
};
