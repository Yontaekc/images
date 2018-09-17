import React from 'react';
import OnePic from './onePic.jsx';

var LessThanFive = ({ pictures }) => {
  return (
    <div id="inner">
      {pictures.map((picture, index) => {
        return <OnePic key={index} pictures={picture} />;
      })}
    </div>
  );
};

export default LessThanFive;
