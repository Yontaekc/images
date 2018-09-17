import React from 'react';
import Button from './button.jsx';

const PlusModal = ({ data }) => {
  return (
    <div>
      <button type="button" data-toggle="modal" data-target="#exampleModalLong" id="button">
        <span id="buttonName">{data.picture.length} photos</span>
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#FFFFFF" fill="none" fill-rule="evenodd">
            <path d="M18.808 12.13H4.25M11.53 4.85v14.558" />
          </g>
        </svg>
      </button>

      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div role="document">
          <div id="modalContent">
            <div id="modalHeader">
              <h5 id="plusTitle">{data.name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div>
              {data.picture.map((picture, index) => {
                return (
                  <div className="popup-img">
                    <img src={picture} />
                  </div>
                );
              })}
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlusModal;
