import React from 'react';

var Button = ({ pictures, buttonHandler }) => {
  return (
    <div id="button" onClick={buttonHandler}>
      <span id="buttonName">{pictures.length} photos</span>
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#FFFFFF" fill="none" fill-rule="evenodd">
          <path d="M18.808 12.13H4.25M11.53 4.85v14.558" />
        </g>
      </svg>
    </div>
  );
};

export default Button;
