import React, { Component } from 'react';
import './App.css';

import Grid from "./components/Grid";

class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    clicked: "",
    images: ["alakazam", "arcanine", "charizard", "clefairy", "eevee", "gengar", "jigglypuff", "mewtwo", "ninetales", "pikachu", "poliwrath", "psyduck", "scyther", "snorlax", "tentacruel"]
  }

  handleClick(e){
    alert("You clicked " + e.target.id)
  }

  // handleClick(e) {
  //   if (this.state.clicked !== e) {
  //     alert("You clicked " + e.target.id)
  //   } else if (this.state.clicked === e) {
  //     alert("You already clicked that!")
  //   }

  // }
  render() {
    return (
    <Grid 
    images = {this.state.images}
    handleClick = {this.handleClick}
    />
    );
  }
}

export default App;
