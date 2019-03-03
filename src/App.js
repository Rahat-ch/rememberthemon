import React, { Component } from 'react';
import './App.css';

import Grid from "./components/Grid";
import StatusBoard from "./components/StatusBoard";

//this will track what we click and be stored in state
let clicked = [];

//array of all the pokemon images - this will be shuffled and stored in state
let images = ["alakazam", "arcanine", "charizard", "clefairy", "eevee", "gengar", "jigglypuff", "mewtwo", "ninetales", "pikachu", "poliwrath", "psyduck", "scyther", "snorlax", "tentacruel"];

//got the below function from https://bost.ocks.org/mike/shuffle/

function shuffle(array) {
  let m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    clicked: clicked,
    images: images,
    status: "Ok trainer choose a Pokemon!"
  }

  //i originally tried to set state by passing in previous state and pushing but that didn't seem to work - i wanted to avoid using global variables but thats the only way i could make it work the way i wanted - i'll ask ta about this but if you are grading and know what i mean would appreciate some insight

  handleClick = (e) => {
    if (clicked.includes(e.target.id)) {
      clicked = [];
      shuffle(images);
        if (this.state.score > this.state.highScore) {
          this.setState({ clicked: clicked, images: images, score: 0, highScore: this.state.score, status: "Good work trainer you earned a high score!" })
          alert("Game over")
        } else {
          this.setState({ clicked: clicked, images: images, score: 0, status: "You need more badges trainer!" })
          alert("Game over")
        };
    } else if (!clicked.includes(e.target.id)) {
      clicked.push(e.target.id);
      shuffle(images);
      this.setState({ clicked: clicked, images: images, score: this.state.score + 1, status: "It's super effective!" });
    }
  }
  render() {
    return (
      <div>
        <StatusBoard
          score={this.state.score}
          highScore={this.state.highScore}
          status={this.state.status}
        />
        <Grid
          images={this.state.images}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
