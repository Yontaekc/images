import React from 'react';
import OnePic from './onePic.jsx';
import TwoPic from './twoPic.jsx';
import Container from './container.jsx';
import Button from './button.jsx';
import PlusModal from './plusModal.jsx';
import OnePicModal from './onePicModal.jsx';
import data from '../../../db/fakedata.js';

let fakeData = data.slice(0, 1);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onCloseHandler = this.onCloseHandler.bind(this);
    this.onLeftClick = this.onLeftClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
    this.state = {
      data: fakeData,
      onePicButton: false,
      clickedPic: ''
    };
  }

  onClickHandler(picture) {
    console.log(picture);
    this.setState(
      {
        clickedPic: picture
      },
      () => {
        this.setState({
          onePicButton: true
        });
      }
    );
  }

  onCloseHandler() {
    this.setState({
      onePicButton: false
    });
  }

  onLeftClick(picture) {
    let prevIndex = this.state.data[0].picture.indexOf(picture) - 1;
    let prevPic;
    if (prevIndex === -1) {
      prevPic = this.state.data[0].picture[this.state.data[0].picture.length - 1];
    } else {
      prevPic = this.state.data[0].picture[prevIndex];
    }
    this.setState({
      clickedPic: prevPic
    });
  }

  onRightClick(picture) {
    let nextIndex = this.state.data[0].picture.indexOf(picture) + 1;
    let nextPic;
    if (nextIndex === this.state.data[0].picture.length) {
      nextPic = this.state.data[0].picture[0];
    } else {
      nextPic = this.state.data[0].picture[nextIndex];
    }
    this.setState({
      clickedPic: nextPic
    });
  }

  render() {
    return (
      <div>
        {this.state.onePicButton && this.state.clickedPic ? (
          <OnePicModal
            picture={this.state.clickedPic}
            restaurant={this.state.data[0]}
            onCloseHandler={this.onCloseHandler}
            onLeftClick={this.onLeftClick}
            onRightClick={this.onRightClick}
          />
        ) : (
          <div>
            <Container pictures={this.state.data[0].picture} onClickHandler={this.onClickHandler} />
            <PlusModal data={this.state.data[0]} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
