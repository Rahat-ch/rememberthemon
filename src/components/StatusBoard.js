import React from 'react';

const StatusBoard = props => (
    <div className="board">
        <h1 className="title"> Remember The Mon!</h1>
        <h3 className="instructions">Instructions: Click a Pokemon and you get a point, but don't click the same Pokemon more than once!</h3>
        <h3 className="status">Current status: {props.status}</h3>
        <div className="scores">
            <p className="score">Score: {props.score}</p>
            <p className="score">High Score: {props.highScore}</p>
        </div>
    </div>
)

export default StatusBoard;