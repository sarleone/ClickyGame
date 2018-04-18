import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import QueenCard from "./components/QueenCard";
import queens from "./queens.json";
import JumboT from './components/JumboT';

class App extends Component {
  state = {
    queens,
    count:0
  };

  shuffleCards = () => {
    //code here to shuffle images when clicked
    console.log("shufflecards");
    let array = this.state.queens;
    let i = array.length -1,
    j = 0,
    temp;
    while(i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return this.setState({queens:array});
  };
  // if the score is zero reset 
  // handleClickEvent(event) {
  //   if(this.state.count ===0) {
  //     queens = this.shuffleCards(queens);
  //   }
  // }
  onClickHandler = id => {
    console.log("onClickHandler");
    let found = this.state.queens.find(function(queen){
      return queen.id == id;
    })
    if (found.clicked){
      console.log("reset");
      this.state.queens.forEach(function(queen) {
        queen.clicked = false;
      });
      this.setState({count: 0});
      console.log("back to 0")
    } else {
      found.clicked = true;
      this.shuffleCards();
      console.log("queens: ", this.state.queens);
      this.setState({count: this.state.count +1});
      console.log("added score");
    }
  }
  //clickyGame
  // if you click on a card that has not been selected before
  // game [];
    //push selected card into array
    //if card id is not found in game array 
      //score ++;
    //else 
      //reset game
  
  //reset game
    //set score to 0
    //empty game array
  
  render() {
    return (
      <div>
        <NavBar count = {this.state.count} />
        <JumboT backgroundImage="http://hdblackwallpaper.com/wallpaper/2015/07/hot-pink-backgrounds-for-desktop-16-free-hd-wallpaper.jpg">
      <h1>Clicky Game!</h1>
      <h2>Click on an image to earn points but don't click more than once!</h2>
        </JumboT>
        <Wrapper>
          {this.state.queens.map((queen, i) => (
            <QueenCard
              onClickHandler={this.onClickHandler}
              id={queen.id}
              key={queen.id}
              image={queen.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
