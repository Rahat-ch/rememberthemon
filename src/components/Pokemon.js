import React  from 'react'

const Pokemon = props => (
    <div className="imgContainer">
        {props.images.map(image => (
            <img onClick={(e) => props.handleClick(e)} 
            key={image} 
            src={`/images/${image}.png`} 
            alt={image} id={image} 
            className="pokemon" 
            />
        ))}
    </div>
)

export default Pokemon