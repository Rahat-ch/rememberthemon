import React from 'react';
import Pokemon from './Pokemon'


const Grid = props => (
    <div className="container">
        
            <Pokemon 
            images={props.images}
            handleClick={props.handleClick}
            />
    </div>
)



export default Grid;

