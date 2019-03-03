import React from 'react';
import Pokemon from './Pokemon'

// const shuffleArr = arr => (
//     arr.map(x => [Math.random(), x]).sort((x,y) => x[0] - b[0]).map(x=>x[1])
// );

const Grid = props => (
    <div className="container">
        <footer className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <h4>Some text</h4>
            </div>
            <Pokemon 
            images={props.images}
            handleClick={props.handleClick}
            />
        </footer>
    </div>
)



export default Grid;

// this.state = {
//     player: {
//         score: 0,
//         highScore: 0,
//         clicked: ""
//     }

// };

// this.images = ["alakazam", "arcanine", "charizard", "clefairy", "eevee", "gengar", "jigglypuff", "mewtwo", "ninetales", "pikachu", "poliwrath", "psyduck", "scyther", "snorlax", "tentacruel"];