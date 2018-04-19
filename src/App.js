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
    count:0,
    topCount:0
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

  onClickHandler = id => {
    console.log("onClickHandler");
    let found = this.state.queens.find(function(queen){
      return queen.id === id;
    })
    if (found.clicked){
      if (this.state.count > this.state.topCount) {
        this.setState({topCount: this.state.count});
      }
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
  
  render() {
    return (
      <div>
        <NavBar count = {this.state.count} topCount ={this.state.topCount}/>
        <JumboT backgroundImage="http://hdblackwallpaper.com/wallpaper/2015/07/hot-pink-backgrounds-for-desktop-16-free-hd-wallpaper.jpg">
      <h1>RuPaul's Drag Race Clicky Game</h1>
      <h2>Click a queen to earn points but don't click the same queen twice!</h2>
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