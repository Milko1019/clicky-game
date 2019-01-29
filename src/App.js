import React, { Component } from 'react';
import styled from 'styled-components';
import imgArray from './imgArray.json';
import './App.css'
import Scoreboard from './components/Scoreboard/scoreboard';
import Card from './components/Card/card'

// import shuffle from 'shuffle-array';
const PictureBoard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto auto auto auto;
  width: 95%;
  background-image: url("https://s3-eu-west-1.amazonaws.com/images.linnlive.com/0d5180a37a8de3cf76052639384dd66f/fcaa5e38-8edb-4b7a-b53e-c8f0a7825a02.jpg");
  margin-top: -33px;
`


const shuffleArray = (array) => {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
};

class App extends Component {
  
  state = {
    imgArray,
    currentScore: 0,
    topScore: 0,
    message: "",
    clicked: [],
    gameOver: false,
    color: ""
  }

  componentDidMount() {
    this.setState({message: "Click a Shape to Start Game!"})
  }

  handleImgCardClick = (id) => {
    if (!this.state.clicked.includes(id)) {
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({ gameOver: false });
    } else {
      this.resetGame();
    }
  }


  pointIncrease = () => {
    let score = this.state.currentScore + 1;
    if (score === this.state.imgArray.length) {
      this.setState({
        message: "Nice Win",
        color: "green",
        topScore: score,
        currentScore: 0,
        clicked: [],
        imgArray,
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        message: "New High Score!!",
        color: "white"
      });
    } else {
      this.setState({
        currentScore: score,
        message: "Correct, Keep Going!!",
        color: "blue"
      });
    }
    this.resetImgArray();
  }

  resetGame = () => {
    this.setState({
      points: 0,
      currentScore: 0,
      topScore: this.state.topScore,
      message: "Wrong Choice!!",
      color: "red",
      clicked: [],
      imgArray,
      gameOver: true
    });
    // this.gameLostMessages()
    this.resetImgArray();
  }

  resetImgArray = () => {
    let newimgArray = shuffleArray(imgArray);
    this.setState({ imgArray: newimgArray })
  }

  
  
  render() {
    
    return (
      <>
        <Scoreboard
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          color={this.state.color}
        />
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Clicky-Game</h1>
            <p class="lead"><strong>Click a shape to gain points, if you click the same shape your score will go back to zero.</strong></p>
          </div>
        </div>

        <PictureBoard>
          {this.state.imgArray.map(img => (
              <Card
                  id={img.id}
                  key={img.id}
                  name={img.name}
                  image={img.image}
                  co-native={img.coNative}
                  handleImgCardClick={this.handleImgCardClick}
              />
          ))}
        </PictureBoard>

        <footer class="page-footer font-small unique-color-dark pt-4">
            <div class="container">
            </div>
            <div class="footer-copyright text-center py-3">Github:
              <a href="https://github.com/Milko1019/clicky-game"> Clicky-Game</a>
            </div>
          </footer>
      </>
    );
  }
}

export default App;
