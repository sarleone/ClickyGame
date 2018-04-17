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
    queens
  };

  shuffleQueens = id => {
    //code here to shuffle images when clicked
    //const queens = this.state.queens.filterq(queen => queen.id )
  };

  //score
  
  render() {
    return (
      <div>
        <NavBar />
        <JumboT backgroundImage="http://hdblackwallpaper.com/wallpaper/2015/07/hot-pink-backgrounds-for-desktop-16-free-hd-wallpaper.jpg">
      <h1>Clicky Game!</h1>
      <h2>Click on an image to earn points but don't click more than once!</h2>
        </JumboT>
        <Wrapper>
          {this.state.queens.map((queen, i) => (
            <QueenCard
              shuffleQueens={this.shuffleQueens}
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
