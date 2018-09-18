import React from 'react';
import OnePic from './onePic.jsx';
import TwoPic from './twoPic.jsx';
import Container from './container.jsx';
import Button from './button.jsx';
import PlusModal from './plusModal.jsx';
import OnePicModal from './onePicModal.jsx';
import data from '../../../db/fakedata.js';
import styles from '../../src/styles.css';

let fakeData = data.slice(0, 1);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onCloseHandler = this.onCloseHandler.bind(this);
    this.onLeftClick = this.onLeftClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.gridClickHandler = this.gridClickHandler.bind(this);
    this.state = {
      data: fakeData,
      onePicButton: false,
      wholePicButton: false,
      clickedPic: ''
    };
  }

  buttonHandler() {
    this.setState(prevState => ({
      wholePicButton: !prevState.wholePicButton
    }));
  }

  onClickHandler(picture) {
    console.log(picture);
    this.setState(
      {
        clickedPic: picture,
        wholePicButton: false
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

  gridClickHandler() {
    this.setState({
      onePicButton: false,
      wholePicButton: true
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
            gridClickHandler={this.gridClickHandler}
          />
        ) : this.state.wholePicButton ? (
          <PlusModal
            data={this.state.data[0]}
            buttonHandler={this.buttonHandler}
            onClickHandler={this.onClickHandler}
          />
        ) : (
          <div className={styles.wholeApp}>
            <Container pictures={this.state.data[0].picture} onClickHandler={this.onClickHandler} />
            <Button pictures={this.state.data[0].picture} buttonHandler={this.buttonHandler} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
