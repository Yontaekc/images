import React from 'react';
import MoreThanFive from './moreThanFive.jsx';
import LessThanFive from './lessThanFive.jsx';

var Container = ({ pictures, onClickHandler }) => {
  return (
    <div id="container">
      {pictures.length > 5 ? (
        <MoreThanFive pictures={pictures} onClickHandler={onClickHandler} />
      ) : (
        <LessThanFive pictures={pictures} onClickHandler={onClickHandler} />
      )}
    </div>
  );
};

export default Container;
